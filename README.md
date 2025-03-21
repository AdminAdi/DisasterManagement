# 🌍 Disaster Management System (MERN Stack) 🚀

## 📌 Overview
The **Disaster Management System** is a full-stack web application built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. It provides an integrated platform to report, track, and manage disaster-related incidents effectively. The system aims to **streamline disaster response**, enable **real-time updates**, and foster **community-driven assistance** during emergencies.

## 🔥 Features
- **User Authentication & Role-Based Access** (Admin, Volunteers, Affected Users, Donors)
- **Incident Reporting & Tracking** with location-based mapping
- **Interactive Community Forum** for discussions & updates
- **Live Map Integration** to visualize disaster-prone areas
- **Medical Assistance Requests** & availability tracking
- **Volunteer & Resource Management**
- **Real-time Alerts & Notifications**
- **Secure API with JWT Authentication**

## 🛠️ Technologies Used
### **Frontend (Client) - React.js**
- React Hooks & Context API for state management
- React Router for navigation
- Leaflet.js for interactive map visualization
- Axios for API requests

### **Backend (Server) - Node.js & Express.js**
- RESTful API architecture
- JWT Authentication & bcrypt for security
- Express middleware for request handling
- Mongoose for MongoDB object modeling

### **Database - MongoDB**
- NoSQL Database for scalable data storage
- Indexed collections for optimized performance

### **Additional Tools & Services**
- Cloud Storage (AWS S3 / Firebase for media handling)
- WebSockets (Socket.io) for real-time communication
- Redux (if needed) for state management

## 📥 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/disaster-management.git
cd disaster-management
```

### **2️⃣ Install Dependencies**
#### **Backend (Server)**
```sh
cd server
npm install
```
#### **Frontend (Client)**
```sh
cd client
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in both **server** and **client** directories and configure:
```
# Server .env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

```
# Client .env
REACT_APP_API_BASE_URL=http://localhost:5000
```

### **4️⃣ Run the Application**
#### **Start Backend**
```sh
cd server
npm start
```
#### **Start Frontend**
```sh
cd client
npm start
```

The application will be available at **http://localhost:3000**

## 🛠 Usage
- **Register/Login** as a user, volunteer, or admin.
- **Report Incidents** with location & details.
- **Monitor Active Disasters** on the live map.
- **Seek & Provide Help** via community forums.
- **Admin Panel** to manage reports, volunteers, and donations.

## 🛡️ Security Measures
- **JWT-based Authentication** to secure API endpoints.
- **Role-based access control** for restricted functionalities.
- **Data validation & sanitation** to prevent injection attacks.

## 🤝 Contributing
1. **Fork the repo** & create a new branch.
2. Make your changes & **commit with proper messages**.
3. Push the branch and create a **Pull Request (PR)**.

## 📜 License
This project is licensed under the **MIT License**.

## 📧 Contact
For queries or collaborations, reach out via **itsmeaditya3254@gmail.com** or create an issue in the repository.

---

⚡ *Built with MERN Stack for a safer & more connected world!* 🚀