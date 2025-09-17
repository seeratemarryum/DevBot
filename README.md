# DevBot
Monthly Project Buildables Cybersecurity Fellowship. A full-stack web app built with the aim of "Build, Break and Secure"

## 📌 Overview
This project is a **deliberately vulnerable full-stack web application** built as part of a security assignment.  
It is designed to demonstrate **common web vulnerabilities** (XSS, Broken Access Control, and Sensitive Data Exposure), how attackers can exploit them, and how developers can mitigate them.  

The app allows users to interact in a simple chat interface, with messages stored in MongoDB.  

## 🎯 Objectives
- Develop a small **full-stack app** (frontend + backend + database).  
- Intentionally introduce **at least 3 vulnerabilities**:
  1. **Cross-Site Scripting (XSS)** – unsanitized user input in chat.  
  2. **Broken Access Control** – no proper session validation, direct URL manipulation possible.  
  3. **Sensitive Data Exposure** – hardcoded secrets in code / weak password storage.  
- Exploit these vulnerabilities using manual and automated methods.  
- Document findings, exploitation steps, and mitigation strategies.  

## 🏗️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js (Express.js)  
- **Database**: MongoDB (Atlas) with Mongoose ODM  

## ⚠️ Vulnerabilities Demonstrated
1. **XSS (Cross-Site Scripting)**  
   - Chat messages are rendered without sanitization.  
   - Payload: `<script>alert("Hacked!")</script>`  

2. **Broken Access Control**  
   - Users can bypass authentication by directly hitting protected routes.  

3. **Sensitive Data Exposure**  
   - API key and DB credentials are hardcoded in `.env` or server logs.  

## 🔧 Installation & Running the App

### 1. Clone Repository
```bash
git clone https://github.com/seeratemarryum/DevBot.git

```
2. Backend Setup
cd backend
npm install

Create a .env file in /backend:

PORT=4002
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>

Run the backend: npm start

3. Frontend Setup
Open frontend/index.html in your browser (or serve with Live Server).

cd <repo-name>
