const jwt = require('jsonwebtoken');
const mysql = require('mysql');

module.exports = function (req, res) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send(err);
            console.error(err);
        } else {
            res.status(200).send("Yeah it is done");
            const userId = decoded.id;
            const query = "SELECT * FROM users"
            
        }
    });
}