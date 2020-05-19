const mysql = require('mysql');
const jwt = require('jsonwebtoken');

function getUsers(req, res) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send({ success: false });
        }
        let sql = mysql.format("SELECT admin FROM users WHERE id=?", [decoded.id]);
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500);
            }
            if (result.length > 0 && result[0].admin == 1) {
                sql = "SELECT firstname, lastname, email FROM users";
                db.query(sql, (err, result) => {
                    if (err) {
                        res.status(500);
                    }
                    res.status(200).send(result);
                });
            } else {
                res.status(401);
            }
        })
        
    });
}

module.exports = getUsers;