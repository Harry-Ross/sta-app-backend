const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/sta-app-db', 
    { useNewUrlParser: true }
);

module.exports = mongoose;