const addUserToGame = require('./methods/append-user-game');

function joinGame(req, res) {
    /*
    TODO:
    ~ Recieve game code, search up in mysql then add user to user_game table
    ~ Create method file for adding users to user_game table


    Not sure if this shit actually works because I did it at like 1am, good night future dev
    */
    jwt.verify(req.headers.token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) throw err;
        var sql = mysql.format("SELECT name, owner_id FROM games WHERE entry_code = ?", [ req.body.entry_code ])

        db.query(sql, function(err, result) {
            if (err) throw err;
            try {
                addUserToGame(decoded.id, result[0].game_id, 0);
                res.status(200).send({ success: true })
            } catch (e) {
                res.status(401).send(e);
            }
        })
        
    });
}

module.exports = joinGame;