const express = require('express');
const app = express.Router();

const createGame = require('./../../controllers/games/game-creator');
app.post('/new', createGame);

const joinGame = require('./../../controllers/games/join-game');
app.post('/join', joinGame);

const createTeam = require('./../../controllers/games/team-creator')
app.post('/teams/create', createTeam);

const joinTeam = require('./../../controllers/games/join-team');
app.post('/teams/:team_id', joinTeam);

const getActivities = require('./../../controllers/activities/get-activities');
app.get('/:game_id/activities', getActivities);

const createActivity = require('./../../controllers/activities/create-activity');
app.post('/:game_id/activities/new', createActivity);

module.exports = app;