const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const uuid = require('uuid');

function login(req, res, next) {
    const sql = mysql.format("SELECT id, firstname, lastname, password FROM users WHERE email = ?", [req.body.email]);

    db.query(sql, function(err, user) {
        if (err) console.error(err);
        try {
            bcrypt.compare(req.body.password, user[0].password, function (err, result) {
                if (err) console.error(err);
                if (result) {
                    const token = generateToken(user[0].id, user[0].firstname, user[0].lastname, req.body.email);
                    res.status(200).send({
                        firstname: user[0].firstname,
                        lastname: user[0].lastname,
                        token 
                    });
                }
                else {
                    res.status(401).send({ success: false, error: "Authentication error" });
                }
            })
        }
        catch (err) {
            res.status(401).send({ success: false, error: "Authentication error" });
        }
    })
}

function register(req, res) {
    const user_uuid = uuid.v4();

    // TODO: Much cleaner way to output the request body
    var sql = mysql.format("INSERT INTO users (id, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)", 
    [
        user_uuid,
        req.body.firstname, 
        req.body.lastname, 
        req.body.email,
        hashPassword(req.body.password)
    ]);

    db.query(sql, function(err, result) {
        if (err) {
            console.error(err);
            res.status(401).send({ success: false, error: "Registration failed" });
        } else {
            const token = generateToken(user_uuid, req.body.firstname, req.body.lastname, req.body.email);
            res.status(200).send({ success: true, token })
        }
    })
}

function generateToken(user_uuid, firstname, lastname, email) {
    return jwt.sign({ id: user_uuid, firstname, lastname, email }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

function hashPassword(password) {
    try {
        let hash = bcrypt.hashSync(password, 10);
        return hash;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    register, login
};
