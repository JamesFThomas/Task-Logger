// import mongoose to connect to db
const mongoose = require('mongoose');
// Import config package to access mongoDB credentials
const config = require('config');
// Initialize db variable and set to mongo credentials in config file
const db = config.get('mongoURI');


// Function => create connection to cloud DB instance
const connectDB =  async () => {
  try {
    // Await success response from mongoDB atlas
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    } );

    // Display success message when connected
    console.log('Release The Mongeese...');
  } catch (error) {
    // Display error message if connection fails
    console.error(error.message);
    // exit the process with failure
    process.exit(1);
  }
};

// export the connection function to use in server file
module.exports = connectDB;