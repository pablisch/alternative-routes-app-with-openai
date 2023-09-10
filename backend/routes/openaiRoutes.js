const express = require('express')
const generateStationNames = require('../controllers/openaiController')

// Create the express router object
const router = express.Router()

// Create the routes
router.post('/tracks', generateStationNames)

// Export the router
module.exports = router;