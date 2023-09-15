const express = require('express')
const generateStationNames = require('./controllers/openaiController')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 3, // limit each IP to 3 requests per windowMs
  message: { error: 'Too many or too frequent requests from your device, please try again later' }
})

// routes folder routes
const openaiRoutes = require('./routes/openaiRoutes');
const trainlineRoutes = require('./routes/trainlineRoutes');
const emailRoutes = require('./routes/emailRoutes');

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PW}@cluster0.hdkqhw5.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`

// express app setup
const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use('/openai/tracks', limiter)

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
