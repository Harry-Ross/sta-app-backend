const express = require('express');
const app = express.Router();

const createGame = require('./../controllers/games/game-creator');
app.post('/new', createGame);

const createTeam = require('../controllers/games/team-creator')
app.post('/:id/teams/create', createTeam);

module.exports = app;