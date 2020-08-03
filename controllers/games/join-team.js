const jwt = require('jsonwebtoken');

const addUserToTeam = require('./methods/append-user-team');

function joinTeam(req, res, next) {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) throw err;
        const team_id = req.params.team_id;
        try {
            addUserToTeam(decoded.id, team_id, 0);
            res.status(200).send({ success: true })
        } catch (e) {
            res.status(401).send(e);
            next(e);
        }
    });
}

module.exports = joinTeam;