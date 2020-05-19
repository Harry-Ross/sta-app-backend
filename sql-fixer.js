require('dotenv').config()

const mysql = require('mysql');
const uuid = require('uuid');

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

var input = [
    [ 
        uuid.v4(),
        "7b7c3037-2699-4a91-bf8c-befcc7a9cb15", 
        "80c4a548-2263-4a24-9ebf-7f565700e104", 
        "The ultimate Aries has survived I wasn't supposed to make it past 25", 
    ], 
    [ 
        uuid.v4(),
        "7b7c3037-2699-4a91-bf8c-befcc7a9cb15", 
        "80c4a548-2263-4a24-9ebf-7f565700e104",  
        "When I eat my Range Rover Slightly scratch your Corolla Okay, I smashed your Coronavirus", 
    ], 
    [
        uuid.v4(), 
        "7b7c3037-2699-4a91-bf8c-befcc7a9cb15", 
        "80c4a548-2263-4a24-9ebf-7f565700e104",
        "I'm living in that 21st century Doing something dean to it Do it better than everybody you ever seen do it Screams from the haters, got a nice ring to it I guess every superhero need his theme music",
    ],
    [ 
        uuid.v4(),
        "7b7c3037-2699-4a91-bf8c-befcc7a9cb15", 
        "80c4a548-2263-4a24-9ebf-7f565700e104", 
        "Somebody once told me the world is gonna roll me. I ain't the sharpest toll in the shed." 
    ]
];

let converted = JSON.stringify(input);

let sql = mysql.format("INSERT INTO posts (id, team_id, user_id, content) VALUES ?", [input]);

db.query(sql, (err) => {
    if (err) throw err;
})