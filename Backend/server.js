// ...existing code...
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const { EMAIL_USER, EMAIL_PASS, TO_EMAIL, PORT } = process.env;

if (!EMAIL_USER || !EMAIL_PASS || !TO_EMAIL) {
  console.error('Missing EMAIL_USER, EMAIL_PASS or TO_EMAIL in .env');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // must be Gmail App Password if 2FA enabled
  },
});

transporter.verify()
  .then(() => console.log('Nodemailer transporter verified'))
  .catch(err => {
    console.error('Nodemailer verification failed:', err);
    process.exit(1);
  });

app.post('/api/contact', async (req, res) => {
  console.log('POST /api/contact', req.body);
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  const mailToMe = {
    from: `"Website Contact" <${EMAIL_USER}>`,
    to: TO_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
  };

  const mailToUser = {
    from: `"${EMAIL_USER}" <${EMAIL_USER}>`,
    to: email,
    subject: 'Thank you for contacting me!',
    text: `Hi ${name},\n\nThank you for reaching out! I'll get back to you soon.\n\nBest,\n${EMAIL_USER}`,
    html: `<p>Hi ${name},</p><p>Thank you for reaching out! I'll get back to you soon.</p><p>Best,<br/>${EMAIL_USER}</p>`
  };

  try {
    const r1 = await transporter.sendMail(mailToMe);
    const r2 = await transporter.sendMail(mailToUser);
    console.log('Sent:', r1.messageId, r2.messageId);
    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (err) {
    console.error('Error sending emails:', err);
    return res.status(500).json({ error: 'Failed to send email', details: err.message });
  }
});

const serverPort = PORT || 5000;
app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));
// ...existing code...