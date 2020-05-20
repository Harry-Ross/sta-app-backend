const express = require('express');
const app = express.Router();

const FeedRoutes = require('./api/feed');
app.use('/api', FeedRoutes);

const AuthRoutes = require('./api/auth');
app.use('/api/auth', AuthRoutes);

const UserRoutes = require('./api/users');
app.use('/api', UserRoutes);

const GamesRoutes = require('./api/games');
app.use('/api/games', GamesRoutes);

const ActivitiesRoutes = require('./api/activities');
app.use('/api', ActivitiesRoutes);

const ViewRoutes = require('./views');
app.use('/', ViewRoutes);

module.exports = app;