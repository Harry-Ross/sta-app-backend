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
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.pre('save', function (next) {
    // if (!this.isModified('password')) {
    //     return next();
    // }
    try {
        let hash = bcrypt.hashSync(this.password, 10);
        this.password = hash;
        console.log("made it to here");
    } catch (err) {
        console.error(err);
    }
    next();
});

UserSchema.methods.generateToken = function () {
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
    return token;
}

const User = mongoose.model('User', UserSchema);
module.exports = User;
