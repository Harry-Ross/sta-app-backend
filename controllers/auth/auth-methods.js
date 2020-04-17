const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const uuid = require('uuid');

const User = require('../../models/User');

function login(req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) next(err);
        try {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) console.error(err);
                if (result) {
                    const token = user.generateToken();
                    res.status(200).send({ token });
                }
                else {
                    res.status(401).send({ success: false, error: "Authentication error" });
                }
            })
        }
        catch (err) {
            res.status(401).send({ success: false, error: "Incorrect password" });
        }
    })
}

function register(req, res, next) {
    const user_uuid = uuid.v4();

    // TODO: Much cleaner way to output the request body
    var sql = mysql.format("INSERT INTO users (user_id, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)", 
    [
        user_uuid,
        req.body.firstname, 
        req.body.lastname, 
        req.body.email,
        req.body.password
    ]);

    db.query(sql, function(err, result) {
        if (err) {
            res.status(401).send({ success: false, error: "Registration failed" });
        } else {
            const token = generateToken(user_uuid);
            res.status(200).send({ success: true, token })
        }
    })
}

function generateToken(user_uuid) {
    const token = jwt.sign({ id: user_uuid }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

module.exports = {
    register, login
};
