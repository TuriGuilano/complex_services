// external imports 
const bodyParser = require('body-parser');
// local imports
const path = require('path');
const fs = require('fs');
const { serviceHandler, calendarRequestHandler } = require('../helpers/helpers');
// export index controller to handle homepage request
exports.index = (req, res) => {
  res.render('index');
};
// export overview controller to handle overview request
exports.overview = (req, res) => {
  let userInput = req.body;
  res.render('overview', {data: userInput});
};

exports.calendarRequest = async (req, res) => {
  await calendarRequestHandler();
};

exports.food = (req, res) => {
  res.render('food')
}

// export fetch controller to handle service request
exports.fetch = async (req, res) => {
  let userInput = req.body.query;
  console.log('inside fetch func', userInput);
  let nutritionixResponse = await serviceHandler(userInput);
  console.log('joeee', nutritionixResponse.results)
  res.render('foodDetail', {nutritionixResponse: nutritionixResponse.results});
}