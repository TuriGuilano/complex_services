// external imports
const express = require('express');
// initialize router 
const router = express.Router();
// local imports
const { index, overview, fetch, calendarRequest, food } = require('../controller/indexController');
// define routes for index | overview | service request
router.get('/', index);
router.post('/overview', overview);
router.get('/calendar', calendarRequest);
router.post('/fetchData', fetch);
router.get('/food', food);
router.post('/foodDetail', fetch);
// export router so it is available inside our app.js
module.exports = router;