const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const uuid = require('uuid');

const addUserToTeam = require('./methods/append-user-team');

function createTeam(req, res) {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) res.status(200).send(err);
        const team_id = uuid.v4();

        var sql = mysql.format("INSERT INTO teams (id, name, game_id, owner_id) VALUES (?, ?, ?, ?)", [
            team_id,
            req.body.name,
            req.body.game_id,
            decoded.id
        ])
        db.query(sql, function(err, result) {
            if (err) {
                res.status(401).send(err);
            } else {
                addUserToTeam(decoded.id, team_id, 10);
                res.status(200).send({ success: true, team_id})
            }
        })
    })
}

module.exports = createTeam;