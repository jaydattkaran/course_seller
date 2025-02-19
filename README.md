## A Course Selling FullStack Website

##### 📌 Project Overview


Course Seller is a Web platform that allows to buy, sell, and manage online courses seamlessly. It provides a secure authentication system, course listing, purchase management, and user dashboards. The platform is built using React, Express.js, MongoDB, and JWT authentication, making it scalable and user-friendly.

### 🚀 Features

#### 🔑 Authentication

- User Signup & Login with JWT authentication.
- Secure password hashing with bcrypt.
- Logout functionality to clear session data.

#### 📦 User Dashboard

- View purchased courses.
- Manage profile and settings.

### 🛠️ Tech Stack

#### Frontend

- React.js with JavaScript
- React Hook Form for handling forms
- React Router for navigation
- TailwindCSS for UI styling

#### Backend

- Node.js with Express.js
- MongoDB as the database
- JWT (JSON Web Token) for authentication


### ⚙️ Installation & Setup

#### 1️⃣ Clone the repository

```
git clone https://github.com/jaydattkaran/course_seller.git
cd course_seller
```

#### 2️⃣ Install dependencies

Frontend: 
```
cd api
npm install
```

Backend:
```
cd client
npm install
```

#### 3️⃣ Start the project

Frontend: 
```
npm run dev
```

Backend:
```
npm start
```

#### 4️⃣ Environment Variables

Create a .env file in the backend (/api) directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_USER_PASSWORD=your_jwt_secret_key
JWT_ADMIN_PASSWORD=your_jwt_secret_key
```

#### 🎯 Roadmap

- [x] User Authentication (JWT)
- [x] Course Purchase & Management
- [ ] Payment Gateway Integration
- [ ] Admin Dashboard for Instructors

### 👨‍💻 Contributors

- **Jaydatt Karan** - `Fullstack Developer`

- Want to contribute? Open a pull request! 🚀