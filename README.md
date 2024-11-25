# RBAC System Backend

## Overview

The backend of the RBAC (Role-Based Access Control) System is responsible for handling user authentication, authorization, and role management. It provides a set of RESTful API endpoints to manage users and their access levels within the application.

## Features

- **User Registration and Login**: Secure endpoints for user registration and authentication.
- **Role Management**: Assign and manage user roles to control access to different parts of the application.
- **JWT Authentication**: Uses JSON Web Tokens for secure and stateless authentication.
- **MongoDB Integration**: Stores user data and roles in a MongoDB database.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for creating the API endpoints.
- **MongoDB**: NoSQL database for storing user and role information.
- **Mongoose**: ODM library for MongoDB, providing a schema-based solution to model data.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken**: Library for generating and verifying JWTs.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **MongoDB**: A running instance of MongoDB (local or cloud-based).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/rbac-system-backend.git
   cd rbac-system-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Server

Start the server with the following command:


The server will run on `http://localhost:5000` by default.

## API Endpoints

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a JWT.
- **GET /api/users**: Retrieve a list of users (protected route).
- **PUT /api/users/:id/role**: Update a user's role (protected route).

## Usage

- **Register**: Send a POST request to `/api/auth/register` with `username`, `email`, and `password`.
- **Login**: Send a POST request to `/api/auth/login` with `username` and `password` to receive a JWT.
- **Protected Routes**: Include the JWT in the `Authorization` header as `Bearer <token>` to access protected routes.

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
