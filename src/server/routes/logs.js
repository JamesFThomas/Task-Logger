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
router.get('/', function (req, res) {
  res.send('GET logs route hit')
  res.send()
});

// @route POST/logs
// @desc add a logs to database
// @access public
router.post('/', function (req, res) {
  res.send('POST logs route hit')
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