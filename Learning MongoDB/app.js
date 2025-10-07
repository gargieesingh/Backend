const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send("hey");
})

app.get('/create', (req, res)=>{
    userModel.create({
        name: "Gargie",
        email: "gargie@gmail.com",
        username: "gracy"
    })
})

//upper code is asynchronous, hence , niche wala code will run first, then upper wala, (info by mongoose)
app.listen(3000);