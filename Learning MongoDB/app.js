const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send("hey");
})

app.get('/create', async (req, res)=>{
    let createduser = await userModel.create({
        name: "Gargie hf",
        email: "gargiehf@gmail.com",
        username: "gracyy"
    })
    res.send(createduser)
})

app.get('/update', async (req, res)=>{
    let updateduser = await userModel.findOneAndUpdate({username: "gracy"}, {name: "Gargie Singh"}, {new: true})
    res.send(updateduser)
})

app.get("/read",  async function(req, res){
    let users = await userModel.find({username: "gracy"});
    res.send(users);
})

app.get("/delete", async(req, res)=>{
    let users = await userModel.findOneAndDelete({username: "gracy"});
    res.send(users);
})
//upper code is asynchronous, hence , niche wala code will run first, then upper wala, (info by mongoose)

//mongoose se related koi bhi code asynchronous hoga, we can use async await in it.
app.listen(3000);