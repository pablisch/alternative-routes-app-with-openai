const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    // maxlength: 500
  },
  subscribe: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);