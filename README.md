MeetX Backend API
Activity Booking System (Internship Assignment)
📌 Description
A RESTful API for an activity booking platform (similar to Meetup), built with:

Node.js & Express (Backend)

MongoDB (Database)

JWT (Authentication)

Handles user registration, activity listings, and bookings with proper authorization.

🚀 Features
✅ User Authentication

Secure registration/login with password hashing

JWT token-based protected routes

✅ Activity Management

Public endpoint for browsing activities

Detailed activity info (title, location, datetime)

✅ Booking System

Authenticated users can book activities

Personalized booking history

✅ Error Handling

Structured JSON error responses

Input validation

🛠 Tech Stack
Component	Technology
Backend Framework	Express.js
Database	MongoDB (Atlas)
Authentication	JWT + bcrypt
API Testing	Postman
⚙️ Setup Instructions
1. Prerequisites
Node.js (v18+)

MongoDB Atlas account

Postman (for testing)

2. Installation
bash
# Clone repository
git clone https://github.com/Umesh-Dayananda13/meetx-backend.git

# Install dependencies
npm install

# Set up environment variables (create .env file)
cp .env.example .env
3. Configure .env
env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/meetx
JWT_SECRET=your_random_secret_key
PORT=5000
4. Run the Server
bash
# Development (with auto-restart)
npm run dev 

# Production
npm start
🔍 API Endpoints
Authentication
Endpoint	Method	Description
/api/auth/register	POST	Register new user
/api/auth/login	POST	Login existing user
Activities
Endpoint	Method	Description
/api/activities	GET	List all activities
Bookings (Requires JWT)
Endpoint	Method	Description
/api/bookings	POST	Book an activity
/api/bookings	GET	Get user's bookings
📊 Sample Requests
User Registration:

http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Alex Johnson",
  "email": "alex@meetx.com",
  "phone": "+15551234567",
  "password": "SecurePass123!"
}
Get Activities:

http
GET /api/activities
🐛 Troubleshooting
Issue	Solution
404 Not Found	Check endpoint URLs and route mounting
401 Unauthorized	Include valid JWT token in Authorization header
400 Bad Request	Verify JSON body format and required fields
