const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    teamname: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        userid: {
            type: mongoose.ObjectId,
            required: true
        }
    },
    content: {
        type: String
    },
    images: {
        type: String,
    },
    profileimg: {
        type: String,
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;