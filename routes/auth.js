const express = require('express');

const app = express.Router();

const authMethods = require('../controllers/auth/auth-methods');

app.post('/register', authMethods.register);

app.post('/login', authMethods.login);

module.exports = app;
