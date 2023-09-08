const express = require('express')
const generateStationNames = require('./controllers/openaiController')
const { getAllTrainlines, getSingleTrainline, postNewTrainline, updateTrainline } = require('./controllers/trainlineController')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose')

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PW}@cluster0.hdkqhw5.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`

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
