import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { transporter } from './nodemailer-config.js';

dotenv.config();

const app = express();
app.use(cors({
  origin:  process.env.FRONTEND_URL , 
}));
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: `Portfolio Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ success: false, message: 'Email sending failed.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
