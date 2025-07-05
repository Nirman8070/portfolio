from flask import Flask, request, jsonify, render_template
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'nirmankumar1999@gmail.com'  # Replace with your Gmail
app.config['MAIL_PASSWORD'] = 'ichi bkch cbrs sblb'      # Use an App Password, not your Gmail password
app.config['MAIL_DEFAULT_SENDER'] = 'nirmankumar1999@gmail.com'

mail = Mail(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    subject = data.get('subject')
    message = data.get('message')

    email_body = f"""
    Name: {name}
    Email: {email}
    Phone: {phone}
    Subject: {subject}
    Message: {message}
    """

    try:
        msg = Message(subject=f"Portfolio Contact: {subject}",
                      recipients=['nirmankumar1999@gmail.com'],
                      body=email_body)
        mail.send(msg)
        return jsonify({'success': True, 'message': 'Message sent!'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)