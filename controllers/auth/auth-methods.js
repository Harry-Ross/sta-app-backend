const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) next(err);
        try {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) console.error(err);
                if (result) {
                    const token = jwt.sign({ id: user._id }, req.app.get('secretkey'), { expiresIn: '24h' });
                    res.status(200).send({ user, token })
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
    const user = new User(req.body);
    user.save(function (err, user) {
        if (err) {
            res.status(401).send({ success: false, error: "Registration failed" });
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
            res.status(200).send({ success: true, token })
        }
    });
}

module.exports = {
    register, login
};
