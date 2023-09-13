const Trainline = require('../models/trainlineModel');

// GET all trainlines
const getAllTrainlines = async (req, res) => {
  try {
    const trainlines = await Trainline.find();
    return res.status(200).json({ trainlines });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while getting all trainlines.' });
  }
};

// GET a single trainline
const getSingleTrainline = async (req, res) => {
  try {
    const { lineName } = req.params;
    const trainline = await Trainline.findOne({ lineName });
    if (trainline) {
      return res.status(200).json({ trainline });
    }
    return res.status(404).json({ error: 'Trainline not found.' });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while getting a single trainline data.' });
  }
};

// PUT (update) a trainline by lineName
const updateTrainline = async (req, res) => {
  try {
    const { lineName } = req.params;
    const { stations, theme } = req.body;
    const trainline = await Trainline.findOneAndUpdate({ lineName }, { stations, theme }, { new: true });
    if (trainline) {
      return res.status(200).json({ trainline });
    }
    return res.status(404).json({ error: 'Trainline not found.' });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while updating a trainline.' });
  }
};

// // POST a new trainline
// const postNewTrainline = async (req, res) => {
//   try {
//     const { lineName, stations, theme } = req.body;
//     const trainline = await Trainline.create({ lineName, stations, theme });
//     return res.status(201).json({ trainline });
//   } catch (error) {
//     return res.status(500).json({ error: 'An error occurred while posting a new trainline.' });
//   }
// };

//export functions
module.exports = {
  getAllTrainlines,
  getSingleTrainline,
  updateTrainline,
  // postNewTrainline,
};

