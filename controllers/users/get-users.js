const mysql = require('mysql');
const jwt = require('jsonwebtoken');

function getUsers(req, res, next) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send({ success: false });
            next(err);
        }
        let sql = mysql.format("SELECT admin FROM users WHERE id=?", [decoded.id]);
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500);
                next(err);
            }
            if (result.length > 0 && result[0].admin == 1) {
                sql = "SELECT firstname, lastname, email FROM users";
                db.query(sql, (err, result) => {
                    if (err) {
                        res.status(500);
                        next(err);
                    }
                    res.status(200).send(result);
                });
            } else {
                res.status(401);
                next(err);
            }
        })
        
    });
}

module.exports = getUsers;