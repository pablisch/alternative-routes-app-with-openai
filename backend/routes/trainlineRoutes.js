const express = require('express')
const {
  getAllTrainlines,
  getSingleTrainline,
  postNewTrainline,
  updateTrainline,
} = require('../controllers/trainlineController')

// Create the express router object
const router = express.Router()

// Create the routes
router.get('/', getAllTrainlines)
router.get('/:lineName', getSingleTrainline)
router.post('/', postNewTrainline)
router.put('/:lineName', updateTrainline)

// Export the router
module.exports = router;