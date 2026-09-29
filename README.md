# HomelyHub 🏠

### AI-Powered Stay Booking Web Application

HomelyHub is a full-stack stay booking platform built with the **MERN
stack**, designed to bring property discovery, booking, property
listing, and AI-assisted trip planning into one application.

Users can search for stays based on location, budget, guests, dates, and
property preferences, while property owners can list their properties
and use AI to generate descriptions. The platform also includes an AI
trip planner that creates a day-wise travel plan and suggests stays that
fit the user's budget.

> **Project Type:** Internship Project\
> **Stack:** MERN + AI\
> **Authentication:** JWT + HTTP Cookies\
> **AI:** Groq SDK\
> **Image Management:** ImageKit

------------------------------------------------------------------------

## 🚀 Live Application

-   **Frontend:** https://homelyhub-web-app.netlify.app
-   **Backend API:** https://homelyhub-xdq2.onrender.com

------------------------------------------------------------------------

## 📌 Project Overview

HomelyHub is designed as an Airbnb-like platform for discovering,
listing, and booking stays while combining the stay-booking experience
with trip planning.

### Core workflow

``` text
Sign Up / Login
       ↓
Search & Filter Stays
       ↓
View Property Details
       ↓
Check Date Availability
       ↓
Book a Stay
       ↓
Payment Verification
       ↓
Booking Confirmation
       ↓
View My Trips
```

For owners:

``` text
Owner Login
    ↓
List Property
    ↓
Upload Property Images
    ↓
Provide Property Details
    ↓
AI Generates Description
    ↓
Property Published
```

For trip planning:

``` text
Destination + Budget + Days + Interests
                  ↓
             AI Trip Planner
                  ↓
      Day-wise Travel Plan
                  +
       Matching Available Stays
```

------------------------------------------------------------------------

## 🎯 Problem Statement

Traditional stay-booking workflows can require users to move between
multiple services for searching, booking, and planning their trip.

HomelyHub addresses several practical problems:

-   Finding a suitable stay by city, budget, guests, and dates can take
    time.
-   Existing bookings can create date conflicts and potential
    double-booking problems.
-   Property owners may find it difficult to create attractive property
    descriptions.
-   Trip planning and stay booking are often handled separately.
-   Users need a convenient way to discover available stays and manage
    their trips in one place.

------------------------------------------------------------------------

## 💡 Solution

HomelyHub combines stay discovery, property listing, booking, and
AI-assisted travel planning into a single platform.

### Smart Search & Filters

Users can search and filter properties based on:

-   City
-   Price
-   Property type
-   Room type
-   Amenities
-   Number of guests
-   Check-in and check-out dates

Only properties available for the selected dates are shown.

### Safe Booking Flow

The booking workflow verifies availability before confirming a booking.
Booked dates are tracked against the property to reduce the possibility
of overlapping bookings.

### AI Property Description

Property owners provide basic property information and the AI generates
a concise description using the supplied details.

The implementation is designed to avoid inventing amenities that were
not provided by the owner.

### AI Trip Planner

Users provide:

-   Destination
-   Budget
-   Number of days
-   Interests

The AI generates a structured day-wise travel plan along with matching
stays that fit the trip budget.

------------------------------------------------------------------------

## ✨ Key Features

### 🔐 Authentication & Security

-   User signup
-   User login
-   User logout
-   JWT-based authentication
-   JWT stored using HTTP cookies
-   Protected routes
-   Role-based authorization
-   Password hashing using bcrypt
-   Forgot password functionality
-   Password reset through an email link
-   Reset tokens stored as hashes
-   Reset tokens expire after 10 minutes
-   Password fields excluded from normal responses

### 🔎 Search & Property Discovery

-   Property search
-   Multiple filters
-   Pagination
-   12 properties per page
-   Date-based availability filtering
-   Property details
-   Property photos
-   Amenities
-   Check-in information
-   Map/location information

### 📅 Booking

-   Date availability checking
-   Booking creation
-   Booking verification flow
-   Booking confirmation
-   Existing booking dates tracked against properties
-   My Bookings / My Trips
-   Individual booking details

### 🤖 AI Features

#### AI Description Writer

Generates property descriptions based on information provided by the
property owner.

#### AI Trip Planner

Generates:

-   Day-wise itinerary
-   Activities based on user interests
-   Matching stays
-   Budget-aware stay suggestions

The AI integration uses structured prompts and JSON-oriented responses
to keep the output consistent.

### 🖼️ Image Management

-   Property image upload
-   ImageKit integration
-   Cloud-hosted images
-   Only image URLs are stored in MongoDB
-   Initials-based avatar fallback

### 📧 Email Features

-   Password reset email
-   Email templates using Nodemailer and Mailgen

------------------------------------------------------------------------

## 🛠️ Technology Stack

### Frontend

  Technology      Purpose
  --------------- ---------------------
  React           Frontend UI
  Vite            Frontend build tool
  Redux Toolkit   State management
  React Router    Client-side routing
  Axios           API communication
  Ant Design      UI components
  Leaflet         Maps and location

### Backend

  Technology   Purpose
  ------------ --------------------------------
  Node.js      Runtime
  Express.js   REST API
  MongoDB      Database
  Mongoose     MongoDB ODM
  JWT          Authentication
  Cookies      Secure session/token transport
  bcrypt       Password hashing
  Nodemailer   Email delivery
  Mailgen      Email template generation

### AI & Cloud

  Technology   Purpose
  ------------ ----------------------------
  Groq SDK     LLM integration
  ImageKit     Image hosting and delivery
  Netlify      Frontend deployment
  Render       Backend deployment

### Development Tools

-   Git
-   GitHub
-   Postman
-   VS Code

------------------------------------------------------------------------

## 🏗️ Architecture

HomelyHub follows a layered MERN architecture:

``` text
                    ┌──────────────────────┐
                    │      React App       │
                    │   Vite + Redux       │
                    └──────────┬───────────┘
                               │
                         Axios / REST
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │       Node.js        │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        Authentication     Controllers       AI Services
        & Middleware          │                │
                              │              Groq
                              ▼
                         Mongoose
                              │
                              ▼
                         MongoDB Atlas

              ┌───────────────────────────────┐
              │            ImageKit           │
              │       Property Images         │
              └───────────────────────────────┘
```

------------------------------------------------------------------------

## 📂 Project Structure

A simplified project structure:

``` text
HomelyHub/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── services/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

> Folder names may evolve as the project continues to be developed.

------------------------------------------------------------------------

## 🔒 Security & Reliability

Several backend mechanisms were implemented to address common security
and booking problems.

### Password Security

Passwords are hashed using bcrypt before being stored.

``` text
Plain Password
      ↓
bcrypt
      ↓
Hashed Password
      ↓
MongoDB
```

Password fields are also excluded from normal query results where
appropriate.

### Secure Password Reset

The password reset process:

``` text
Generate reset token
        ↓
Hash token
        ↓
Store hash in database
        ↓
Send reset link
        ↓
Token expires after 10 minutes
```

Only the hash is persisted in the database.

### Password Change Token Safety

Previously issued reset tokens are invalidated through password-change
tracking.

### Booking Date Validation

Date overlap is checked using the existing booking interval against the
requested interval.

Conceptually:

``` text
Existing booking starts < requested checkout
AND
Existing booking ends > requested check-in
```

If both conditions are true, the requested dates overlap with an
existing booking.

### Cross-Origin Authentication

The deployed frontend and backend run on different origins, so the
application uses:

-   CORS configuration
-   Credentialed requests
-   HTTP cookies
-   Appropriate `SameSite` and `Secure` cookie settings

------------------------------------------------------------------------

## 🧩 Challenges & Solutions

### Double Booking

**Challenge:** Two bookings should not overlap for the same property and
dates.

**Approach:** Booking dates are checked for overlap and stored with the
property's current booking information.

### Date Overlap Logic

An overlap is detected when:

``` text
existingStart < requestedCheckout
AND
existingEnd > requestedCheckin
```

### Password Security

**Challenge:** Passwords and reset credentials must not be exposed.

**Approach:**

-   bcrypt password hashing
-   password fields hidden from normal responses
-   hashed reset tokens
-   reset-token expiration

### Authentication After Page Refresh

**Challenge:** The frontend needs to know whether a user is still
authenticated after refreshing the page.

**Approach:** The frontend calls the `/me` endpoint on application load,
while the authentication cookie identifies the logged-in user.

### Cookies Across Origins

**Challenge:** The frontend is hosted on Netlify while the backend is
hosted on Render.

**Approach:**

-   CORS with credentials
-   Axios `withCredentials`
-   Production cookie configuration using appropriate `SameSite` and
    `Secure` settings

### Structured AI Output

**Challenge:** LLM responses can be inconsistent.

**Approach:**

-   Strict system prompts
-   Structured output requirements
-   JSON-oriented response format
-   Backend validation of AI responses

------------------------------------------------------------------------

## 👨‍💻 My Role

As the developer of HomelyHub, my work covered the full-stack
implementation, including:

### Database Design

Designed MongoDB/Mongoose models for:

-   Users
-   Properties
-   Bookings

### Authentication APIs

Implemented:

-   Signup
-   Login
-   Logout
-   Protected routes
-   Authorization middleware
-   Forgot password
-   Password reset

### Search APIs

Implemented:

-   Search
-   Filters
-   Pagination
-   Availability-based property filtering

### Frontend Integration

Connected React pages to backend REST APIs using:

-   Axios
-   Redux Toolkit
-   React Router

### AI Integration

Integrated Groq-powered functionality for:

-   Property description generation
-   AI trip planning

### API Testing

Tested backend endpoints using Postman during development.

------------------------------------------------------------------------

## 📊 End-to-End Outcome

HomelyHub brings the core journey together:

``` text
Signup
  ↓
Search
  ↓
Filter
  ↓
View Property
  ↓
Check Availability
  ↓
Book
  ↓
Confirm
  ↓
My Trips
```

For property owners:

``` text
Login
  ↓
Add Property
  ↓
Upload Images
  ↓
Generate AI Description
  ↓
List Property
```

For travellers:

``` text
Destination
  +
Budget
  +
Days
  +
Interests
  ↓
AI Trip Planner
  ↓
Day-wise Plan + Matching Stays
```

------------------------------------------------------------------------

## 📚 What I Learned

Working on HomelyHub provided practical experience with:

-   MERN stack architecture
-   REST API development
-   Express middleware
-   MongoDB and Mongoose
-   JWT authentication
-   Cookie-based authentication
-   Password security with bcrypt
-   Role-based authorization
-   Search, filtering, and pagination
-   Booking and date-overlap logic
-   React state management with Redux Toolkit
-   Axios API integration
-   AI/LLM integration
-   Structured AI responses
-   Image hosting
-   Email workflows
-   API testing with Postman
-   Git and GitHub
-   Frontend/backend deployment
-   CORS and cross-origin authentication

------------------------------------------------------------------------

## 🔮 Future Scope

The project can be extended with:

-   Real Razorpay payment integration
-   Reviews and ratings
-   Admin dashboard
-   Advanced property management
-   Improved booking management
-   More sophisticated recommendation features
-   Additional travel-planning capabilities
-   Further production-level security and testing

------------------------------------------------------------------------

## ⚙️ Local Setup

### Prerequisites

Make sure you have:

-   Node.js
-   npm
-   MongoDB / MongoDB Atlas
-   Git

### Clone the repository

``` bash
git clone <your-repository-url>
cd HomelyHub
```

### Backend setup

``` bash
cd Backend
npm install
```

Create a `.env` file:

``` env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add the other credentials required by the services enabled in your local
configuration, such as Groq, ImageKit, and email delivery.

Start the backend:

``` bash
npm run dev
```

### Frontend setup

Open another terminal:

``` bash
cd Frontend
npm install
npm run dev
```

For production deployment, configure the frontend API base URL using:

``` env
VITE_API_BASE_URL=your_backend_url
```

## 🤝 Contributing

Contributions and suggestions are welcome.

1.  Fork the repository
2.  Create a feature branch
3.  Make your changes
4.  Test the changes
5.  Commit your changes
6.  Push the branch
7.  Open a pull request

------------------------------------------------------------------------

## 📄 License

This project was developed as an internship project and learning-focused
full-stack application.

------------------------------------------------------------------------

## 👤 Developer

**Sujal Mahapatra**

Built with the MERN stack, AI integration, and a focus on secure
authentication and real-world booking workflows.

------------------------------------------------------------------------

### HomelyHub

> **Search. Book. List. Plan --- all in one place.**
