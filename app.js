// external imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const chalk = require('chalk');
// local imports
const port = process.env.PORT || 1337;
const path = require('path');
const router = require('./router/router');
// require & initialize .env
require('dotenv').config({ path: '.env' });
// first define all the sets
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// apply compression || important to define compression here, otherwise files defined above the compression
// will be ignored.
app.use(compression())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// let router handle all requests
app.use('/', router);
// starts UNIX socket and listens for connections on given path
app.listen(port, () => {
  console.log(chalk.magenta(`server running on ${port}`));
});