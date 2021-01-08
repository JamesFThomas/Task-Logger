// Import mongoose to connect to db
const mongoose = require('mongoose');
// Import config package to access mongoDB credentials
const config = require('config');
// Import dotenv package to use environment variables 
const dotenv = require('dotenv');
// Initalize new instance in file to acces envrionment variables
dotenv.config(); 
// Create local variable set to hidden mongoDB connection data
const mongoDB_URI = process.env.MONGO_DB_URI

// Function => create connection to cloud DB instance
const connectDB =  async () => {
  try {
    // Await success response from mongoDB atlas
    await mongoose.connect( mongoDB_URI, {
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