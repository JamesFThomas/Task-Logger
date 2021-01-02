// import Express package
const express = require('express');
// create new router for users routes
const router = express.Router()
// Import Log model to enter logs into application db

                            // logs
// GET logs - retrieve all logs
router.get('/', function (req, res) {
  res.send('GET logs route hit')
  res.send()
});
// POST logs - add a log to db
router.post('/', function (req, res) {
  res.send('POST logs route hit')
});
// PUT logs - update a log in db
router.put(`/:id`, function (req, res) {
  res.send('PUT logs route hit')
});
// DELETE Logs - remove a log from the db
router.delete(`/:id`, function (req, res) {
  res.send('DELETE logs route hit')
});

module.exports = router;