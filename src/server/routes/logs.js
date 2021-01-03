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
router.put(`/:id`, function (req, res) {
  res.send('PUT logs route hit')
});

// @route DELETE/logs
// @desc remove a log from database
// @access public
router.delete(`/:id`, function (req, res) {
  res.send('DELETE logs route hit')
});

module.exports = router;