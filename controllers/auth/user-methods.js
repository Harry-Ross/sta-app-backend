const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// A large amount of this code has been stolen from a Medium article, I'll rewrite it later I suppose
module.exports = {
    register: function (req, res, next) {
        console.log(req.body["firstname"]);
        const user = new User(req.body);
        user.save();

        res.json({ status: "success, hopefully" })
    },

    login: function (req, res, next) {
        userModel.findOne({ email: req.body.email }, function (err, user) {
            if (err) next(err);
            try {
                bcrypt.compare(req.body.password, user.password, (err, passwordResult) => {
                    if (err) console.error(err);
                    if (passwordResult) {
                        const token = jwt.sign({ id: user._id }, req.app.get('secretKey'), { expiresIn: '24h' });
                        res.status(200).send({ user, token });
                    } else {
                        res.status(401).send({ error: "Authentication failure" })
                    }
                })
            }
            catch (err) {
                console.error(err);
                res.status(401).send({ error: "Authentication failure" })
            }
        });
    }
}