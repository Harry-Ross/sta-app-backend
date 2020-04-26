const express = require('express');
const pug = require('pug')
const app = express.Router();

const verifyJWT = require('./../controllers/auth/verify-jwt');

app.get('/login', function(req, res) {
    res.render('login', {})
});

app.get('/register', function(req, res) {
    res.render('register', {})
});

app.get('/', function(req, res) {
    res.render('index', {})
});

app.get('/users', function(req, res) {
    res.render('users', {})
});

module.exports = app;