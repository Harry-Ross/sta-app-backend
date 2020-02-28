const express = require('express');
const app = express.Router();

let PostsRoutes = require('./posts');
app.use('/api', PostsRoutes);

module.exports = app;