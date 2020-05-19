const express = require('express');
const app = express.Router();

const getUserInfo = require('../../controllers/users/get-user-info');
app.get('/user/:id', getUserInfo);

const getUsers = require('./../../controllers/users/get-users');
app.get('/users', getUsers);

module.exports = app;