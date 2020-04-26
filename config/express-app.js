const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')

app.use(express.static('static'))

module.exports = app;