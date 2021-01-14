// Import express package
const express = require('express');
// Import connectDB function to connect to mongoDB instance
const connectDB = require('./config/db')
// Initialize new instance of express
const app = express()
//Initialize instance of express router
// const router = express.Router();
// create variable set to value of port server will be listening on
const port = process.env.PORT || 3001;
//import path package for file paths to static folders
const path = require('path');

// invoke function to connect to mongoDb instance
connectDB();

// Initialize express middleware to parse request body data within routes
app.use(express.json({ extend: false }));

// Route - home route - MAY NOT NEED THIS
app.get('/', (req, res) => {
  res.send('Home route hit')
})

// Routers
app.use('/logs', require('./src/server/routes/logs'));
app.use('/techs', require('./src/server/routes/techs'));

// Check the environment mode
if(process.env.NODE_ENV === 'production'){
  // Set static folder to serve
  app.use(express.static('build'));
  // route to serve build folder
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));
}


// Set connection message to show when server started
app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`)
});