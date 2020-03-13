const jwt = require('jsonwebtoken');
const Post = require('./../../models/Post');
const User = require('./../../models/User');

module.exports = function (req, res) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            res.status(401).send(err);
            console.error(err);
        } else {
            res.status(200).send("Yeah it is done");
            const userId = decoded.id;
            const post = new Post({
                
            });
            post.save(function (err, post) {
                if (err) throw err;
                console.table(post);
            })
            // User.findById(userId, function (err, user) {
            //     user.posts.push();
            //     user.save(function (err) { if (err) throw err; });
            // });
        }
    });
}