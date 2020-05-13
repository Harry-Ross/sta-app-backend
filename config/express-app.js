const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')

app.use(cors());

app.use(express.static('public'))

module.exports = app;