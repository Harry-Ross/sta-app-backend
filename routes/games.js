const express = require('express');
const app = express.Router();

const createGame = require('./../controllers/games/game-creator');

app.post('/new', createGame)

app.get('/:id', function(req, res) {
    
})

module.exports = app;