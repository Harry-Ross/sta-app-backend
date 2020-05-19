const jwt = require('jsonwebtoken');
const mysql = require('mysql');

module.exports = function (req, res, next) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send({ success: false });
            next(err);
        }
        let sql = mysql.format("SELECT firstname, lastname, profile_img FROM users WHERE id=?", [req.params.id]);
        db.query(sql, function(err, result) {
            if (err) {
                res.status(500).send({ success: false });
                next(err);
            }
            res.status(200).send(result[0]);
        })
    })
}