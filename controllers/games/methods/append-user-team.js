function addUserToTeam(user_id, team_id, permissions) {
    sql = mysql.format("INSERT INTO user_teams (user_id, team_id, permissions) VALUES (?, ?, ?)", [
        user_id, team_id, permissions
    ])
    db.query(sql, function(err, result) {
        if (err) throw err;
        return ;
    })
}

module.exports = addUserToTeam;