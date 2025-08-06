# ⚡ Actyme - Full-Stack Task Reward Platform

Welcome to **Actyme**, a next-gen platform where users complete tasks, earn entries, and win monthly rewards.

This is a **MERN stack application** with internationalization (i18n), Stripe integration, and secure backend features.

---

## 🚀 Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, React Router, i18next
- **Backend:** Express.js, Node.js, MongoDB, Stripe
- **Security & Logging:** Helmet, CORS, Rate Limiting, Mongo Sanitize, Winston
- **Deployment Target:** Render

---

## 📁 Project Structure

```
Actyme/
├── backend/
│ ├── logs/                             # Server logs (Winston)
│ ├── middleware/                       # Custom middlewares (error handler, security)
│ ├── routes/                           # API routes (e.g., /stripe, /health)
│ ├── .env                              # Backend environment variables
│ ├── server.js                         # Entry point for starting the server
│ └── app.js                            # Express app configuration
│
├── frontend/
│ ├── public/                           # Static assets (favicon, etc.)
│ ├── src/
│ │ ├── components/                     # Shared UI components (e.g., Navbar, Footer)
│ │ ├── i18n/                           # i18n config and translation files (e.g., en.js, hi.js)
│ │ ├── pages/                          # Page components (e.g., Home, Success, Cancel)
│ │ ├── routes/                         # Route definitions
│ │ └── main.jsx                        # Entry point for the React app
│ ├── .env.local                        # Frontend environment variables
│ └── index.html                        # Root HTML file used by Vite
│
├── package.json                        # Root package.json with build/start scripts
└── README.md                           # Project documentation

```
---
## 🔑 Environment Variables

### 🔧 Backend `.env` (in `/backend/.env`)

PORT=5000
STRIPE_SECRET_KEY=sk_test_51Rt2Ni0KODFFF8nArgCfW7nSa8tV6vFi0E3b5Zk9OnL9MclKYm43asMmBtvt05QqD382UmiDHX50LuMU5H4c77uj00EKYr81tc

CLIENT_URL=https:http://localhost:5173

### 🌐 Frontend `.env` (in `/frontend/.env`)

VITE_STRIPE_PUBLIC_KEY=pk_test_51Rt2Ni0KODFFF8nAttRIcw9RWpGl3doY0obHUZxz8rh9SmxY264mHDU1NcDLSnYF2LhlahHpwTnmOZ0UNN6wAuUI002T7oekjm

---

## 1️⃣ API Endpoints

| Method | Endpoint                                | Description                          |
|--------|-----------------------------------------|--------------------------------------|
| GET    | `/api/health`                           | Health check                         |
| POST   | `/api/stripe/create-checkout-session`   | Creates Stripe Checkout session      |

---

## 2️⃣ Stripe Test Notes

To test Stripe payments in development:

- Use test card: `4242 4242 4242 4242` (any valid future expiry, CVC)
- Requires a Stripe account with test keys
- Success redirects to `/success`, cancel to `/cancel`

---

## 3️⃣ Install Dependencies & Run in Development Mode

From the root directory of your project:

### 🧱 Install dependencies

```bash
# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend

# Run backend server
npm run start --prefix backend

# Run frontend (Vite dev server)
npm run dev --prefix frontend

# Build
npm run build

# Start
npm run start

# Root package.json Scripts
{
  "scripts": {
    "build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend",
    "start": "npm run start --prefix backend"
  }
}

```
---

## 🖼️ Screenshots

<img width="1889" height="872" alt="Screenshot 2025-08-06 211232" src="https://github.com/user-attachments/assets/482c3e7a-58ba-46c0-a642-485afce880b9" />

<img width="1892" height="880" alt="Screenshot 2025-08-06 211247" src="https://github.com/user-attachments/assets/56a69fe8-a8ba-468d-9348-0efddac06bab" />

<img width="1896" height="869" alt="Screenshot 2025-08-06 211309" src="https://github.com/user-attachments/assets/cbd1c446-636e-400c-971a-2ec62e3356af" />

---

