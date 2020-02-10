// Required packages
const express = require('express');
const bodyParser = require('body-parser');

// Initialise an instance of Express
var app = express();

// Tells express that json should be used
app.use(bodyParser.json());

module.exports = app;