const mysql = require('mysql');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

function createGame(req, res) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) throw err;
        console.table(decoded)
        const game_id = uuid.v4();
        const game_code = generateGameCode();

        var sql = mysql.format("INSERT INTO games (id, name, max_players, entry_code, owner_id) VALUES (?, ?, ?, ?, ?)", 
        [
            game_id,
            req.body.name,
            req.body.playercount,
            game_code,
            decoded.id
        ]);

        db.query(sql, function(err) {
            if (err) {
                res.status(401).send({ success: false, error: "Regisration failed", message: err });
            } else {
                res.status(200).send({ success: true, game_id, game_code});
            }
        })
    });
}

function generateGameCode() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let game_code = "";
    for (let i = 0; i < 4; i++) {
        game_code = game_code + characters.charAt(Math.floor(Math.random() * 36));
    } 
    return game_code;
}

module.exports = createGame;