const express = require('express');
const app = express.Router();

const getPosts = require('../../controllers/posts/get-posts');
app.get('/posts', getPosts);

const uploadController = require('./../../controllers/posts/upload-post');
app.post('/upload', uploadController);

module.exports = app;