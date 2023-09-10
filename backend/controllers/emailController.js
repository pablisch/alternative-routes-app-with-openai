const nodemailer = require("nodemailer");

const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;
const emailService = process.env.EMAIL_SERVICE
const emailTo = process.env.EMAIL_TO

const sendEmail = async (req, res) => {
  const { name, email, message, subscribe } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
  });

  const mailOptions = {
      from: smtpUsername,
      to: emailTo, // for REAL USE
      // to: "nobody@example.com", // for TESTING ONLY
      subject: `Contact Us Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}\nSubscribe?: ${subscribe}`,
  };

  try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
  }
};

module.exports = sendEmail;