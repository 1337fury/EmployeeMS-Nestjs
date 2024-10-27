# Employee MS (Nestjs)

A simple CRUD app

## Features

- **User Registration and Login**: Securely register and log in users with different roles (admin, manager, employee).
- **Employee Management**: Create, view, update, and delete employee details.
- **Authentication & Authorization**: Protect your API with JWT and control access based on user roles.
- **Caching with Redis**: Improve performance by caching frequent read operations. `(In progress)`
- **API Documentation with Swagger**: Interactive and easy-to-use API docs for testing and development. `(In progress)`

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing employee data.
- **Redis**: An in-memory data store used for caching.
- **Docker**: Containerize the application for easy setup and deployment.
- **Swagger**: Auto-generate interactive API documentation.

## Installation

1. Clone the Repository
Open your terminal and run:

```bash
git clone https://github.com/1337fury/EmployeeMS-Nestjs.git
```

2. Navigate to the Project Directory

```bash
cd EmployeeMS-Nestjs
```

3. Set Up Environment Variables

Create a .env file in the root directory and add the following:

```bash
PORT=3000
MONGODB_URI=mongodb://mongo:27017/employee_db
JWT_SECRET=your_jwt_secret_key
REDIS_HOST=redis
REDIS_PORT=6379
```

4. Running the Application

```bash
docker-compose up --build
```

5. Access the Application

- API Endpoints: The application runs on http://localhost:3000.
- Swagger Documentation: Access the interactive API docs at http://localhost:3000/api. (In progress)


### Using the API

1. **Register a New User**

   - **Endpoint:** `POST /auth/register`
   - **Body:**

     ```json
     {
       "firstName": "fname",
       "lastName": "lname",
       "email": "example@example.com",
       "phoneNumber": "+2126....",
       "position": "Developer",
       "department": "Engineering",
       "password": "password123",
       "role": "admin"
     }
     ```

2. **Log In**

   - **Endpoint:** `POST /auth/login`
   - **Body:**

     ```json
     {
       "email": "example@example.com",
       "password": "password123"
     }
     ```

   - **Response:** You'll receive a JWT token to use for authenticated requests.

3. **Manage Employees**

   - **Create Employee:** `POST /employees`
   - **Get All Employees:** `GET /employees`
   - **Get Employee by ID:** `GET /employees/{id}`
   - **Update Employee:** `PUT /employees/{id}`
   - **Delete Employee:** `DELETE /employees/{id}`

   > **Note:** Use the JWT token in the `Authorization` header as `Bearer YOUR_TOKEN` to access protected routes.