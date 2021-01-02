// Import express package
const express = require('express')
// Initialize new instance of express
const app = express()
//Initialize instance of express router
const router = express.Router();
// create variable set to value of port server will be listening on
const port = 3000


// Route - home route - MAY NOT NEED THIS
app.get('/', (req, res) => {
  res.send('Home route hit')
})

// Routers
app.use('/logs', require('./routes/logs'));
app.use('/techs', require('./routes/techs'));


                                   //Routes





// Set connection message to show when server started
app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`)
});