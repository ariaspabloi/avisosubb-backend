# AvisoSubb Backend

AvisoSubb Backend is the server-side implementation of the AvisoSubb app, a platform designed for publishing and discovering services and products. This repository houses the codebase for the backend API, built using JavaScript, TypeScript, Express.js, PostgreSQL, Prisma ORM, user authentication with JWT, and image uploading to Amazon S3.

## Features

- **User Authentication**: Secure user registration and login system powered by JSON Web Tokens (JWT) to ensure data privacy and access control.

- **Service and Product Management**: API endpoints to create, retrieve, update, and delete services and products. Each item can have various attributes like title, description, price, category, etc.

- **Image Uploading to S3**: Seamless integration with Amazon S3 for storing and retrieving images associated with services and products.

## Technologies Used

- **JavaScript**: The primary programming language used for building the backend logic.

- **TypeScript**: Enhances the development experience by adding static typing to the JavaScript codebase.

- **Express.js**: A robust web application framework for Node.js, employed to create the RESTful API endpoints.

- **PostgreSQL**: A powerful open-source relational database management system utilized for data storage.

- **Prisma ORM**: An advanced database toolkit and Object-Relational Mapping (ORM) tool that simplifies database operations and interactions.

- **JWT (JSON Web Tokens)**: Implements secure user authentication and authorization processes.

- **Amazon S3**: Enables efficient storage and retrieval of images associated with services and products.

## Getting Started

To get the AvisoSubb Backend up and running locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/avisosubb-backend.git
   ```

2. Install dependencies:

   ```bash
   cd avisosubb-backend
   npm install
   ```

3. Set up the environment variables:

   Create a `.env` file in the project root and add the necessary configuration options, including database connection details, JWT secret, and Amazon S3 credentials.

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. The API should now be accessible at `http://localhost:3000`.
