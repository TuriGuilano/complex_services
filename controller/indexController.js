const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

exports.index = (req, res) => {
  res.render('index');
}

exports.overview = (req, res) => {
  res.render('overview');
}