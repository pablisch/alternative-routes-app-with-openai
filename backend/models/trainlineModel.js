const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trainlineSchema = new Schema({
  lineName: {
    type: String,
    required: true
  },
  stations: {
    type: Array,
    required: true
  },
  theme: {  
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Trainline', trainlineSchema);