const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    posts:[{
        type: mongoose.ObjectId,
        ref: 'Post'
    }]
});

UserSchema.pre('save', function (next) {
    try {
        let hash = bcrypt.hashSync(this.password, 10);
        this.password = hash;
    } catch (err) {
        console.error(err);
    }
    next();
});

UserSchema.methods.generateToken = function () {
    const user = this;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

const User = mongoose.model('User', UserSchema);
module.exports = User;