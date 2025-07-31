require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Send email to you
  const mailToMe = {
    from: `"${name}" <${email}>`,
    to: process.env.TO_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: message,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
  };

  // 2. Send auto-reply to user
  const mailToUser = {
    from: `"Your Name" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thank you for contacting me!',
    text: `Hi ${name},\n\nThank you for reaching out! I'll get back to you soon.\n\nBest,\nYour Name`,
  };

  try {
    await transporter.sendMail(mailToMe);
    await transporter.sendMail(mailToUser);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));