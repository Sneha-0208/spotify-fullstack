# 🎵 Spotify Full-Stack Clone

A full-stack Spotify-inspired music streaming application built using **React, Node.js, Express, MongoDB**, and **Cloudinary**.  
The project is divided into three independent applications: **Frontend**, **Admin Panel**, and **Backend API**, following real-world production practices.

---

## 📌 Project Overview

This project replicates core Spotify-like functionalities, including music browsing, audio playback, and content management via an admin dashboard.  
Each part of the application is developed and deployed independently to ensure scalability and maintainability.
The project is currently under progress, where the attempt is to add more functionalities.

---

## 🏗️ Project Structure

spotify-full-stack/<br />
├── frontend/<br />
├── admin/<br />
├── backend/<br />
└── README.md

---

## 🚀 Live URLs

> ⚠️ Note: Backend is hosted on **Render free tier** and may take **30–60 seconds** to respond after inactivity.

- **Frontend (User App):** https://spotify-frontend-km99.onrender.com 

- **Admin Panel:** https://spotify-admin-ihz2.onrender.com

- **Backend API (Render):** https://spotify-backend-1hxs.onrender.com

---

## ✨ Features

### 🎧 Frontend (User App)
- Browse featured charts and albums
- Play songs with audio controls
- Desktop-first responsive UI
- Global audio state using React Context

### 🛠️ Admin Panel
- Add and delete songs
- Add and delete albums
- Upload album images and audio files
- Clean, desktop-first admin dashboard layout

### ⚙️ Backend API
- RESTful APIs for songs and albums
- MongoDB database integration
- Cloudinary-based media storage
- Secure environment variable configuration

<img width="1916" height="875" alt="image" src="https://github.com/user-attachments/assets/16b52f75-4bee-40a3-9def-acd93cd98038" />

---

## 🧰 Tech Stack

### Frontend & Admin
- React
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Cloudinary
- Multer

---

## 🔐 Environment Variables

This project uses environment variables to keep sensitive information secure.  
The `.env` file is **not included** in the repository.

Create a `.env` file inside the **backend** directory with the following variables:

```env
MONGODB_URI=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
```

## 📄 License

This project is created for learning and educational purposes only.

## 🙌 Acknowledgements

Inspired by Spotify’s user interface and core functionality.
Built as a full-stack learning project.
