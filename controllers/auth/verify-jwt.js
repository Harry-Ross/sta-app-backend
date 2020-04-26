const mysql = require('mysql');
const jwt = require('jsonwebtoken');

function verifyJWT(req, res) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.redirect(401, '/login');
        }
        const user_id = decoded.id;
        let sql = mysql.format("SELECT * FROM users WHERE id=?", user_id);
        db.query(sql, (err, result) => {
            if (err) {
                console.error(err);
                res.redirect(401, '/login');
            }

        })
    });
}

module.exports = verifyJWT;