# 🌍 Wanderlust

Wanderlust is a full-stack web application for discovering, creating, editing, and reviewing travel listings. Inspired by platforms like Airbnb, it allows users to explore global destinations, share their favorite stays, and leave helpful feedback for other travelers.

🔗 **Live Website**: [wanderlust-39h5.onrender.com/listings](https://wanderlust-39h5.onrender.com/listings)

---

## ✨ Features

- 🔍 **Browse Listings**: Explore a wide range of travel destinations and accommodation options.
- ➕ **Add New Listings**: Logged-in users can create and post new listings with images and descriptions.
- ✏️ **Edit/Delete Listings**: Users can update or remove their own listings.
- 📝 **Reviews & Ratings**: Users can leave reviews for listings, helping others make informed decisions.
- 🔐 **Authentication**: Secure user login, signup, and session management.
- 📸 **Image Uploads**: Cloudinary integration for efficient image storage and delivery.

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3
- Bootstrap 5
- EJS Templating

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js (Authentication)
- Cloudinary (Image storage)
- Multer (File uploads)

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account (or local MongoDB instance)
- Cloudinary account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DyutiM25/wanderlust.git
   cd wanderlust
   
2. **Install dependencies**

   ```bash
   npm install

3. **Configure environment variables**
    Create a .env file in the root directory and add the following:
   ```bash
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_KEY=your_key
    CLOUDINARY_SECRET=your_secret
    MAPBOX_TOKEN=your_mapbox_token
    DB_URL=your_mongodb_connection_string
    SECRET=your_session_secret

4. **Start the server**
   ```bash
    npm start

5. **Visit http://localhost:3000/listings in your browser.**

## Project Structure
    wanderlust/
    ├── public/             # Static files (CSS, images, JS)
    ├── routes/             # Express route files
    ├── models/             # Mongoose schemas
    ├── views/              # EJS templates
    ├── controllers/        # Route controllers
    ├── middleware/         # Custom middleware
    ├── utils/              # Utility functions (Cloudinary, ExpressError)
    ├── app.js              # Main application setup
    ├── seeds.js            # Seeder script for dummy data
    └── README.md

## 🧪 Sample User Accounts
   You can register a new account or use the following credentials to explore:
   -  Username: testuser
   -  Password: test123

## 📌 Future Enhancements
   - Advanced search and filtering
   -  Responsive map integration with Mapbox
   -  Booking and payment features
   -  Mobile-responsive UI improvements

## 🧑‍💻 Author
      [Dyuti Mengji](https://github.com/DyutiM25)

## 📄 License
   - This project is open-source and available under the MIT License.

