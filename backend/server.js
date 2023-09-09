const express = require('express')
const generateStationNames = require('./controllers/openaiController')
const { getAllTrainlines, getSingleTrainline, postNewTrainline, updateTrainline } = require('./controllers/trainlineController')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PW}@cluster0.hdkqhw5.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`

const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;
const emailService = process.env.EMAIL_SERVICE
const emailTo = process.env.EMAIL_TO

const mince = process.env.MINCE

// express app setup
const app = express()
// app.listen(PORT, () => console.log(`listening at ${PORT}`))

// middleware
app.use(express.json())
app.use(cors())

// app.use(express.static('public')) // For use when not using a separate front-end

// routes
app.post('/openai/tracks', generateStationNames)
app.get('/lines', getAllTrainlines)
app.get('/lines/:lineName', getSingleTrainline)
app.post('/lines', postNewTrainline)
app.put('/lines/:lineName', updateTrainline)
app.post("/send-email", async (req, res) => {
  const { name, email, message, newsletter } = req.body;

  const transporter = nodemailer.createTransport({
    // host: 'smtp.mail.me.com',
    // port: 587, // Use 465 for SSL
    // secure: false, // Use true for SSL
    service: 'gmail',
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
  });

  const mailOptions = {
      from: smtpUsername,
      to: emailTo,
      subject: `Contact Us Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}\nNewsletter: ${newsletter}`,
  };

  try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
  }
});

// Connect to the database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the database');
    // Define the port.
    app.listen(process.env.PORT, () => console.log('Server listening on port', process.env.PORT)); 
  })
  .catch(err => console.log(err));
