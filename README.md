# File Upload API Service

A robust API service built with **NestJS**, **TypeScript**, **Prisma**, **PostgreSQL**, and **Cloudinary** for streamlined file uploads and management.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: Ensuring type safety and modern JavaScript features.
- **Prisma**: An intuitive ORM that simplifies database interactions with PostgreSQL.
- **PostgreSQL**: A powerful, open-source relational database.
- **Cloudinary**: Cloud-based service for managing images and videos.

## Features

- **File Upload Module**: Easily upload and manage files with dedicated endpoints.
- **RESTful API Endpoints**:
  - `GET /` – Health check route.
  - `POST /file-upload/upload` – Upload a file.
  - `DELETE /file-upload/:id` – Delete a file by its ID.
- **Modular Architecture**: Clear separation of concerns with NestJS modules.
- **Seamless Database Integration**: Using Prisma ORM with PostgreSQL for efficient data management.
- **Cloud Storage**: Integrated with Cloudinary for reliable media storage.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- PostgreSQL
- A Cloudinary account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
npm install

DATABASE_URL=postgresql://user:password@localhost:5432/yourdbname
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

npx prisma generate
npx prisma migrate dev

npm run start:dev

[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [InstanceLoader] PrismaModule dependencies initialized +103ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +1ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [RoutesResolver] AppController {/}: +4ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [RouterExplorer] Mapped {/, GET} route +89ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [RoutesResolver] FileUploadController {/file-upload}: +0ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [RouterExplorer] Mapped {/file-upload/upload, POST} route +200ms
[Nest] 120  - 03/11/2025, 9:25:45 AM     LOG [RouterExplorer] Mapped {/file-upload/:id, DELETE} route +2ms
[Nest] 120  - 03/11/2025, 9:25:49 AM     LOG [NestApplication] Nest application successfully started +3997ms

