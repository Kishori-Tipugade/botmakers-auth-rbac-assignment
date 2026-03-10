#Botmakers Authentication Assignment

This project implements a JWT-based authentication system** with a Spring Boot backend** and a React + TypeScript frontend.
It demonstrates user registration, login, JWT token generation, and access to protected APIs.


#Tech Stack

Backend

-Java
-Spring Boot
-Spring Security
-JWT (JSON Web Token)
-JPA / Hibernate
-MySQL
-Maven

Frontend

-React
-TypeScript
-Vite
-Axios
-React Router


#Project Structure

botmakers-assignment
backend
   -Spring Boot Authentication API

frontend
   -React Authentication UI

README.md

#Backend Setup

-Navigate to backend folder

cd backend

Run Spring Boot application

If using IntelliJ:

Run BotmakersBackendApplication

Or using Maven:

mvn spring-boot:run


#Backend runs on

http://localhost:8080

#Frontend Setup

-Navigate to frontend folder

cd frontend

#Install dependencies

npm install

#Run development server

npm run dev

#Frontend runs on

http://localhost:5173

#Authentication Flow

1.User registers using the register API 
2.User logs in with email and password
3.Backend generates a JWT token
4.Frontend stores token in localStorage
5.Axios sends token in Authorization header
6.Spring Security validates token
7.Protected APIs become accessible


#API Endpoints

Register User

POST /api/auth/register

Request Body:

{
  "name": "User",
  "email": "user@test.com",
  "password": "123456",
  "role": "USER"
}

#Login User

POST /api/auth/login

Request Body:

{
  "email": "user@test.com",
  "password": "123456"
}


Response:

JWT Token

#Public API

Accessible without authentication.

GET /api/public

Response:

Public API - anyone can access


#Protected API

Requires JWT token.

GET /api/user

Header:

Authorization: Bearer <JWT_TOKEN>

Response:

User API - USER or ADMIN can access


#Features Implemented

-User Registration
-User Login
-JWT Token Generation
-Spring Security Integration
-Role-based API Access
-Protected API Endpoints
-React Authentication UI
-Token-based API calls


#Author

Kishori Tipugade

MERN Stack / Full Stack Developer
