const { Router } = require('express');
const red = require('../middleware/red.js');
const blue = require('../middleware/blue.js');
const yellow = require('../middleware/yellow.js');
const colors = require('../middleware/colors.js');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [red, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/orange', [red, yellow], (req, res) => {
    res.json(req.colors);
  });
