// Import express package
const express = require('express');
// Import connectDB function to connect to mongoDB instance
const connectDB = require('../../config/db')
// Initialize new instance of express
const app = express()
//Initialize instance of express router
const router = express.Router();
// create variable set to value of port server will be listening on
const port = process.env.PORT || 3001;

// invoke function to connect to mongoDb instance
connectDB();

// Initialize express middleware to parse request body data within routes
app.use(express.json({ extend: false }));

// API Routers
app.use('/logs', require('./routes/logs'));
app.use('/techs', require('./routes/techs'));

// Check the envrionment mode
if(process.env.NODE_ENV === 'production'){
  // Set static folder to serve
  app.use(express.static('client/build'));
  // route to serve build folder
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')));
}

// Set connection message to show when server started
app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`)
});