const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const uuid = require('uuid');

module.exports = function (req, res) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send(err);
            console.error(err);
        } 
        res.status(200).send("Yeah it is done");
        const user_id = decoded.id;
        const sql = mysql.format("INSERT INTO posts (post_id, user_id, team_id, content) VALUES (?, ?, ?, ?)" [
            uuid.v4(), 
            user_id, 
            req.body.team_id,
            req.body.content
        ]);
        db.query(sql, (err) => {
            if (err) {
                res.status(401);
            } 
            res.status(200);
        });
    });
}