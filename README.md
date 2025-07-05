# 💼 Nirman Kumar — Portfolio Website

Welcome to my **developer portfolio website**, built with **Flask** (Python backend) and a custom **HTML/CSS/JS** frontend. It highlights my skills, projects, timeline, and services — and features a fully functional **contact form** with email notifications via **Flask-Mail**.

![Portfolio Banner](static/images/myphoto.jpg)

## 🌐 Live Demo

> Coming soon — will be deployed on **Render** / **Vercel** / **Netlify**

---

## ⚙️ Features

- ✨ Typing animation with role transitions (Python Developer, ML Engineer, etc.)
- 📦 Projects section with live GitHub repo links
- 🧠 Skills & tech stack with icons
- 📬 Contact form that sends emails using Flask-Mail
- 🌙 Dark modern UI with responsive design
- 📱 Mobile menu with toggle

---

## 🗂️ Project Structure

nirman-portfolio/
│
├── static/
│ ├── style.css
│ ├── script.js
│ ├── images/
│ └── project_image/
│
├── templates/
│ └── index.html
│
├── resume/
│ └── Nirman_kumar_RESUME.pdf
│
├── app.py
├── requirements.txt
└── README.md

## 🛠️ Tech Stack

| Category        | Technologies Used                                          |
|----------------|-------------------------------------------------------------|
| **Frontend**    | HTML, CSS, JavaScript, Boxicons                             |
| **Backend**     | Python, Flask                                               |
| **Mailing**     | Flask-Mail + Gmail SMTP                                     |
| **Deployment**  | Flask dev server (can be hosted on Render/Vercel)          |


## 📥 Setup Instructions

1. **Clone the repo:**

git clone https://github.com/Nirman8070/nirman-portfolio.git
cd nirman-portfolio

2. Create virtual environment:
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

3. Install dependencies:
pip install -r requirements.txt

4.Run the app:
python app.py

5. Visit http://127.0.0.1:5000/ in your browser.

## ✉️ Contact Form Setup
Enable 2FA on your Gmail account.

Create an App Password from Google Account > Security > App passwords.

Replace credentials in app.py:

python
Copy code
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your_app_password'
⚠️ Do NOT commit sensitive credentials. Use environment variables or a .env file instead.

## 📦 requirements.txt
Typical dependencies:

Flask
Flask-Mail

Create with:
pip freeze > requirements.txt

## 🧾 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Nirman Kumar
LinkedIn • GitHub
