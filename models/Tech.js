// Import mongoose package
const mongoose = require('mongoose');

// Create model for log data to be saved in database
const TechSchema = mongoose.mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

// Export log model to use in server routes to persist data
module.exports = mongoose.model('tech', TechSchema);
