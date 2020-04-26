const express = require('express');
const app = express.Router();

const FeedRoutes = require('./api/feed');
app.use('/api', FeedRoutes);

const AuthRoutes = require('./api/auth');
app.use('/api', AuthRoutes);

const GamesRoutes = require('./api/games');
app.use('/api/games', GamesRoutes);

const ViewRoutes = require('./views');
app.use('/', ViewRoutes);

module.exports = app;