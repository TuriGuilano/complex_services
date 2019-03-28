const express = require('express');
const router = express.Router();
const { index, overview } = require('../controller/indexController');

router.get('/', index);
router.get('/overview', overview);

module.exports = router;