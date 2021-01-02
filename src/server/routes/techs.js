// import Express package
const express = require('express');
// create new router for users routes
const router = express.Router()

// Techs
// GET techs
router.get('/', function (req, res) {
  res.send('GET techs route hit')
});
// POST techs
router.post('/', function (req, res) {
  res.send('POST techs route hit')
});
// DELETE techs
router.delete(`/:id`, function (req, res) {
  res.send('DELETE techs route hit')
});

module.exports = router;