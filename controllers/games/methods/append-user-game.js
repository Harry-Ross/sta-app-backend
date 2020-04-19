function addUserToGame(user_id, game_id, permissions) {
    sql = mysql.format("INSERT INTO user_games (user_id, game_id, permissions) VALUES (?, ?, ?)", [
        user_id, game_id, permissions
    ])
    db.query(sql, function(err, result) {
        if (err) throw err;
        return ;
    })
}

module.exports = addUserToGame;