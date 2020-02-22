const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
    },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;