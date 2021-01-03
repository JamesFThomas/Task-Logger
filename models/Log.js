// Import mongoose package
const mongoose = require('mongoose');

// Create model for log data to be saved in database
const LogSchema = mongoose.mongoose.Schema({
  // Include Techs as foreign key to match log to tech
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'techs'
  },
  message: {
    type: String,
    required: true
  },
  attention: {
    type: Boolean,
    required: true
  },
  tech: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export log model to use in server routes to persist data
module.exports = mongoose.model('log', LogSchema);