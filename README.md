# Zerodha Clone – MERN Stack Project

A full-stack Zerodha-inspired trading platform built using the MERN stack. This project demonstrates authentication, protected dashboards, and frontend–backend integration. It is designed as a first internship / academic project.

---

##  Features

- User Signup and Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected dashboard routes
- Logout functionality
- Interactive dashboard UI
- MongoDB Atlas integration
- Responsive UI using Bootstrap

---

##  Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap
- Axios

### Dashboard
- React.js
- Chart.js
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken (JWT)

---

##  Authentication Flow

1. User signs up or logs in from the frontend
2. Backend validates credentials and hashes passwords
3. JWT token is generated on successful authentication
4. Token is passed to the dashboard during redirection
5. Dashboard stores the token and verifies access
6. Protected routes prevent unauthorized access
7. Logout clears the token and redirects to login page


