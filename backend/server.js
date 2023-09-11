const express = require('express')
const generateStationNames = require('./controllers/openaiController') // I don't understand why this id needed but the server crashes without it
const PORT = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose')

// routes folder routes
const openaiRoutes = require('./routes/openaiRoutes');
const trainlineRoutes = require('./routes/trainlineRoutes');
const emailRoutes = require('./routes/emailRoutes');

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PW}@cluster0.hdkqhw5.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`

const { AbortController } = require('abort-controller');
require('dotenv').config();

// Initialize the AbortController if needed
const controller = new AbortController();

console.log('email service is', process.env.EMAIL_SERVICE)

// express app setup
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes folder routes
app.use('/openai', openaiRoutes)
app.use('/lines', trainlineRoutes)
app.use('/send-email', emailRoutes)

// Connect to the database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => console.log('Server listening on port', process.env.PORT)); 
  })
  .catch(err => console.log(err));
