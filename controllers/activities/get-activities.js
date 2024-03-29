const jwt = require('jsonwebtoken');

function getActivities(req, res, next) {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        var sql = "SELECT * FROM activities";
        db.query(sql, function(err, result) {
            if (err) {
                res.status(401).send(err);
                next(err);
            }
            res.status(200).send({ success: "true", activities: result });
        })
    })
}

module.exports = getActivities;