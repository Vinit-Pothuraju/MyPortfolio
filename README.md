
# 🌐 Vinit Kumar Pothuraju – Full Stack Developer Portfolio

Welcome to my personal portfolio built using a full stack setup:

- 💻 **Frontend**: React.js + Tailwind CSS + Framer Motion
- 🛠️ **Backend**: Node.js + Express + Nodemailer
- ✉️ **Email**: Secure email sending via Gmail (Nodemailer)
- 🌐 **Deployment**: Frontend on Vercel, Backend on Render
- 🔒 **Environment-based configs** via `.env` in both frontend and backend

🔗 [Live Website](https://my-portfolio-lilac-chi-13.vercel.app/)

---

## ✨ Features

- Clean, responsive UI using Tailwind CSS
- Smooth animations with Framer Motion
- Toast-based success/error messages
- Contact form with custom backend mailer API
- CORS configured backend with environment-based URL access

---

## 📁 Folder Structure

```

MyPortfolio/
├── frontend/                # React frontend (Vercel)
│   ├── src/
│   ├── public/
│   ├── .env                 # Contains VITE\_BACKEND\_URL
│   └── vite.config.js
│
├── backend/                 # Node.js backend (Render)
│   ├── index.js             # Express app with Nodemailer
│   ├── .env                 # EMAIL\_USER, EMAIL\_PASS, FRONTEND\_URL
│   └── package.json
│
└── README.md

````

---

## 🌍 Environment Setup

### 📦 Frontend (`frontend/.env`)
```env
VITE_BACKEND_URL=https://your-backend-service.onrender.com
````

In `Contact.jsx` (React):

```js
const backendURL = import.meta.env.VITE_BACKEND_URL;
fetch(`${backendURL}/sendMail`, { ... });
```

---

### 🛠️ Backend (`backend/.env`)

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=https://vinit-pothuraju.vercel.app
```

In `Server.js` (Express):

```js
const cors = require("cors");

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["POST"],
  credentials: true,
}));
```

---

## 🧪 Running the Project Locally

### 1️⃣ Backend (Render/Local)

```bash
cd backend
npm install
node index.js
```

> Runs on `http://localhost:5000`

---

### 2️⃣ Frontend (Vercel/Local)

```bash
cd frontend
npm install
npm run dev
```

> Runs on `http://localhost:5173`

---

## ✉️ Contact Form Flow

1. User submits contact form
2. Frontend sends `POST` to `/sendMail` (via backend URL from `.env`)
3. Backend uses **Nodemailer** to send the message
4. React Toastify displays success or error

**Request Format**:

```json
{
  "name": "Vinit Kumar",
  "email": "vinitkumarpothuraju@gmail.com",
  "message": "Hello from your portfolio!"
}
```



## 🧑‍💼 Contact Me

* 📧 Email: [vinitkumarpothuraju@gmail.com](mailto:vinitkumarpothuraju@gmail.com)
* 💼 LinkedIn: [linkedin.com/in/pothuraju-vinit-kumar/](https://www.linkedin.com/in/pothuraju-vinit-kumar/)
* 🐱 GitHub: [github.com/Vinit-Pothuraju](https://github.com/Vinit-Pothuraju)

---

## 🌐 Deployment Summary

| Part     | Platform |                                                            |
| -------- | -------- | ---------------------------------------------------------------- |
| Frontend | Vercel   | 
| Backend  | Render   | 

---

## 📜 License

MIT License © 2025 [Vinit Kumar Pothuraju](https://github.com/Vinit-Pothuraju)


> Built with 💻 + ☕ by Vinit Kumar Pothuraju


