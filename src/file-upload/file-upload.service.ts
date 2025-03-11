import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';


@Injectable()
export class FileUploadService {
  private readonly logger = new Logger(FileUploadService.name);

  constructor(private prisma: PrismaService) {
    cloudinary.config({
      cloud_name: 'dqi6j19ir',
      api_key: '465679474489712',
      api_secret: 'nVhDvnM6C-k2E09jLL-G_G6Myh0',
    });
  }

  async uploadFile(file: Express.Multer.File) {
    try {
      // Upload file to Cloudinary
      const uploadRes: any = await this.uploadToCloudinary(file.path);
      // console.log(uploadRes);

      // Create file record in the database
      const newlyFile = await this.prisma.file.create({
        data: {
          filename: file.originalname,
          publicId: uploadRes?.public_id,
          url: uploadRes?.secure_url,
        },
      });

      // Remove the local file after successful upload
      await fs.promises.unlink(file.path);
      return newlyFile;
    } catch (e) {
      // console.log(e)
      // Attempt to remove the local file in case of any error
      try {
        if (fs.existsSync(file.path)) {
          await fs.promises.unlink(file.path);
        }
      } catch (unlinkError) {
        this.logger.error(
          `Failed to remove file at ${file.path}`,
          unlinkError.stack,
        );
      }
      this.logger.error('File upload failed', e.stack);
      throw new InternalServerErrorException(
        'File upload failed, please try later',
      );
    }
  }

  private uploadToCloudinary(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(filePath, (err, result) => {
        if (err) {
          this.logger.error('Cloudinary upload error', err);
          reject(err);
        }
        resolve(result);
      });
    });
  }

  async deleteFile(fileId: string) {
    try{
    const file =await this.prisma.file.findUnique({
      where: {
        id: fileId,
      },
    });
    if(!file){
      throw new InternalServerErrorException(
        'File not found',
      )
    }
    await cloudinary.uploader.destroy(file.publicId);
    await this.prisma.file.delete({
      where: {
        id: fileId,
      },
    });
    return {
        message: 'File deleted successfully',
    }
    }
  catch(e){
      console.log(e);
      throw new InternalServerErrorException(
        'File delete failed, please try later',
    );
  }

}
}
