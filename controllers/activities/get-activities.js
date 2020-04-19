function getActivities(req, res) {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        var 
    })
}

module.exports = getActivities;