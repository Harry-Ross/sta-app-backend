const mysql = require('mysql');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.headers.token;
    //if (!token) res.status(401).send({ success: false });
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send({ success: false });
        } 

        let sql = mysql.format('SELECT * FROM posts');
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).send({ success: false });
            }
            res.status(200).send({ success: true, posts: result });
        })
    })
}