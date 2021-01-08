// Import Express package
const express = require('express');
// create new router for users routes
const router = express.Router()
// Import config package to use variables from default.json file
const config = require('config');
// Import Log model to enter logs into application db
const Log = require('../../../models/Log');

// @route GET/logs
// @desc retrieve list of logs from database
// @access public
router.get('/',
  async (req, res) => {
    try {
      // Create variable set to returned values found in database
      let logs = await Log.find({ }).sort({ date: -1 })
      // Respond with array of contacts correlated to that user id
      res.json(logs);

      // Respond to any Errors
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
});

// @route SEARCH/logs
// @desc retrieve certain logs based on certain text
// @access public
router.get(`/:text`,
  async (req, res) => {
    try {
      // Create variable set to returned values found in database
      let logs = await Log.find({ message: {"$regex":`${req.params.text}`, "$options": "i"}})
      // Respond with array of contacts correlated to that user id
      res.json(logs);

      // Respond to any Errors
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
});

// @route POST/logs
// @desc add a logs to database
// @access public
router.post('/', async (req, res) => {

  // Deconstruct contact information from request object
   const { tech, message, attention, date } = req.body;

   try {
     // Create variable set to new contact model to be persisted in db
     const newLog = new Log({
        tech,
        message,
        attention,
        date
     });

     // Create variable set to return value of saving new log in system
     const log = await newLog.save()
     // Return the new log information to the client
     res.json(log)

   } catch (error) {
     console.error(error.message)
     res.status(500).send('Server Error')
   }

});

// @route UPDATE/logs
// @desc  updated a log in database
// @access public
router.put(`/:id`,
  async (req, res) =>{

  //   // Deconstruct contact information from request object
  //   const { tech, message, attention, date } = req.body;

  //  // Build contact object to hold values to be updated
  //  const contactFields = {};
  //  // Assign transmitted data to appropriate contactFields prop
  //  if(tech) contactFields.tech = tech;
  //  if(message) contactFields.message = message;
  //  if(attention !== undefined) contactFields.attention = attention;
  //  if(date) contactFields.date = date;

   try {
    //create variable set to return value of finding by user id
    let log = await Log.findByIdAndUpdate(req.params.id,
      // Update contact information with values in contactFields object
      { $set: req.body },
      { new: true}
    );

   // Return Updated Contact Information
   res.json(log)

  // Handle error messages
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }

});

// @route DELETE/logs
// @desc remove a log from database
// @access public
router.delete(`/:id`,
  async (req, res) => {
    // console.log("new request", req.params.id)
    try {
    //create variable set to return value of finding by user id
    const log = await Log.findByIdAndRemove(req.params.id);
    // console.log('deleted log', log)

    // Return Successful removal message
    res.json({ msg: 'Log Successfully Removed' })

    //Handle error messages
    } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
    }
});

module.exports = router;