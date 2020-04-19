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

// Set port
const port = 3000 || process.env.PORT;

server.listen(port, () => {
    console.log(`Running on port ${port}`);
})