// Import mongoose to connect to db
const mongoose = require('mongoose');
// Import config package to access mongoDB credentials
const config = require('config');
// Initialize db variable and set to mongo credentials in config file
const db = config.get('mongoURI');
// Import dotenv package to use environment variables
const dotenv = require('dotenv');
// Initialize new instance in file to access environment variables
dotenv.config();

// Function => create connection to cloud DB instance
const connectDB =  async () => {
  try {
    // Await success response from mongoDB atlas
    await mongoose.connect(process.env.MONGO_DB_URI, {
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