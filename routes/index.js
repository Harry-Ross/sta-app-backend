const express = require('express');
const app = express.Router();

const PostRoutes = require('./posts');
app.use('/api', PostRoutes);

const AuthRoutes = require('./auth');
app.use('/api', AuthRoutes);

module.exports = app;