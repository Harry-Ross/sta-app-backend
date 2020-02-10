const express = require('express');

var app = express.Router();

app.get('/activites', function (req, res) {
    res.send('yes')
})

module.exports = app;