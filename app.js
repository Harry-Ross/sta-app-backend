// Initialise environment variables
require('dotenv').config()

// Define express app from config file
let app = require('./config/express-app')

const server = require('http').Server(app);
const io = require('socket.io')(server);

const mongoose = require('./config/mongoose');

// Set port
const port = 3000 || process.env.PORT;

server.listen(port, () => {
    console.log(`Running on port ${port}`);
})