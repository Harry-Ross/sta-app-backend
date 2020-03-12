const express = require('express');
const app = express.Router();

app.get('/posts', function (req, res) {
    res.send([
        { 
            "teamName": "Team 1", 
            "name": "Emma", 
            "content": "The ultimate Aries has survived I wasn't supposed to make it past 25", 
            "images": "", 
            "profileImg": "https://api.time.com/wp-content/uploads/2018/11/emma-stone-stage-name-inspired-by-baby-spice.jpg" 
        }, 
        { 
            "teamName": "Team 2", 
            "name": "Bob", 
            "content": "When I eat my Range Rover Slightly scratch your Corolla Okay, I smashed your Coronavirus", 
            "images": "https://upload.wikimedia.org/wikipedia/commons/a/ab/B_set_departing_Panania_20180919_01_%28Nimed%29.jpg", 
            "profileImg": "https://vignette.wikia.nocookie.net/btb/images/6/68/BobSavestheHedgehogs105.png/revision/latest?cb=20190806061908"
        }, 
        { 
            "teamName": "Team 3", 
            "name": "Joe", 
            "content": "I'm living in that 21st century Doing something dean to it Do it better than everybody you ever seen do it Screams from the haters, got a nice ring to it I guess every superhero need his theme music", 
            "images": "", 
            "profileImg": "https://ichef.bbci.co.uk/news/976/cpsprodpb/12E0B/production/_88232377_kanye_season3_getty.jpg" 
        },
        { 
            "teamName": "Team 4", 
            "name": "ButcherofKabul", 
            "content": "Somebody once told me the world is gonna roll me. I ain't the sharpest toll in the shed.", 
            "images": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg/800px-Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg", 
            "profileImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/PeteButtigieg_%281%29.JPG/800px-PeteButtigieg_%281%29.JPG" 
        }
    ])
})

module.exports = app;