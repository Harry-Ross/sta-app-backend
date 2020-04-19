const mysql = require('mysql');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

function createActivity(req, res) {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            res.status(500).send({ success: false, err });
        } else {
            insertActivity(
                req.body.name,
                req.body.description,
                req.body.points,
                req.body.lat,
                req.body.long,
                req.body.type
            )
            res.status(200).send({ success: true });
        }
    })
}

function insertActivity(name, description, points, lat, long, type) {
    const activity_id = uuid.v4();
    var sql = mysql.format("INSERT INTO activities (id, name, description, points, lat, long, type) VALUES (?, ?, ?, ?, ?, ?, ?)", [
        activity_id, name, description, points, lat, long, type
    ]);

    db.query(sql, function(err, result) {
        if (err) {
            throw err;
        } else {
            return ;
        }
    })
}

module.exports = createActivity;