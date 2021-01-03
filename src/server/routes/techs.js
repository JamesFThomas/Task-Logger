// Import Express package
const express = require('express');
// create new router for users routes
const router = express.Router()
// Import model  for TechSchema
const Tech = require('../../../models/Tech')
// Import config package to use variables from default.json file
const config = require('config');


// @route GET/techs
// @desc retrieve list of technicians from database
// @access public
router.get('/',
  async (req, res) => {
    try {
      // Create variable set to returned values found in database
      let techs = await Tech.find({ }).sort({ date: -1 })
      // Respond with array of contacts correlated to that user id
      res.json(techs);

    // Respond to any Errors
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }  // res.send('GET techs route hit')
});

// @route POST/techs
// @desc add a technician to the database
// @access public
router.post('/', async (req, res) => {
  // Deconstruct contact information from request object
  const { firstName, lastName } = req.body;

  try {
    // Use mongoose.findOne() to query DB for user firstName
    let newTech = await Tech.findOne({ firstName })

    // If tech already exists
    if (newTech) {
      return res.status(400).json({ msg: "Tech already exists" });

    // If tech doesn't exists
    } else {
      // Create new entry in db for tech with Tech model
      newTech = new Tech({
        firstName,
        lastName
      });
    }

  // Save new User model in DB
  const tech = await newTech.save();
  // Return the tech information
  res.json(tech);

  // Respond with error messages
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
});

// @route DELETE/techs
// @desc remove a technician from database
// @access public
router.delete(`/:id`, function (req, res) {
  res.send('DELETE techs route hit')
});

module.exports = router;