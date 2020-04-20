// Initialise environment variables
require('dotenv').config()

// Define express app from config file
const app = require('./config/express-app')

const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes/index');
app.use('/', routes);

const mysql = require('mysql');

const db = mysql.createConnection ({
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.get('/', function(req, res) {
    res.status(200).send("Yeah, you like dick and balls huh?")
})

// Set port
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Running on port ${port}`);
})