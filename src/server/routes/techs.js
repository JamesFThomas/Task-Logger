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
router.get('/', function (req, res) {
  res.send('GET techs route hit')
});

// @route POST/techs
// @desc add a technician to the database
// @access public
router.post('/', function (req, res) {
  res.send('POST techs route hit')
});

// @route DELETE/techs
// @desc remove a technician from database
// @access public
router.delete(`/:id`, function (req, res) {
  res.send('DELETE techs route hit')
});

module.exports = router;