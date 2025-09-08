const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//route setup
app.get("/", function(req, res){
    res.send("slash page");
})

app.listen(3000, ()=>{
    console.log("Chal rha hai!!");
})