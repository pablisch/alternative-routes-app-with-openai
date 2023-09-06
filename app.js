const express = require('express')
const generateStationNames = require('./controllers/openaiController')
const PORT = process.env.PORT || 3333
const cors = require('cors')

// express app setup
const app = express()
app.listen(PORT, () => console.log(`listening at ${PORT}`))

// middleware
app.use(express.json())
app.use(cors())

// app.use(express.static('public')) // For use when not using a separate front-end

// routes
app.post('/openai/tracks', generateStationNames)
