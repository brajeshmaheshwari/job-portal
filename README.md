# MERN Job Portal 🚀

A full-stack Job Portal application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to post and apply for jobs.

## 🌐 Live Demo

- Frontend: [https://job-portal-frontend-eeqc.vercel.app/](https://job-portal-frontend-eeqc.vercel.app/)
- Backend: [https://job-portal-backend-k3is.onrender.com](https://job-portal-backend-k3is.onrender.com)

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS (or your styling choice), Axios
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📁 Project Structure
job-portal/
├── backend/
├── frontend/
└── README.md


## ✅ Features

- User authentication (Login/Register)
- JWT-based protected routes
- Job creation, listing, and application
- Mobile responsive UI

## ⚙️ Installation Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal

2. Backend Setup
cd backend
npm install
# Create a .env file with:
# MONGO_URI=your_mongo_connection
# JWT_SECRET=your_jwt_secret
Start the server:
npm start

3. Frontend Setup
cd ../frontend
npm install
# Create a .env file with:
# VITE_API_URL=https://your-backend.onrender.com
npm run dev

🛡️ Environment Variables Summary
File	Variables
backend/.env	MONGO_URI, JWT_SECRET, PORT
frontend/.env	VITE_API_URL

📃 License
This project is open-source and free to use.

Made with ❤️ by Brajesh Maheshwari


🔁 Replace `[Your Name]` and `your-username` with your actual name and GitHub username.

---

### 🔹 **4. Save the File**

- In Notepad or VS Code: press `Ctrl + S` to save.
- In Terminal, it’s already saved.

---

### 🔹 **5. Add and Commit the README file to Git**

```bash
git add README.md
git commit -m "Add professional README"
git push origin main
