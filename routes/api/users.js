const express = require('express');
const app = express.Router();

const getUsers = require('./../../controllers/users/get-users');
app.get('/users', getUsers);

module.exports = app;