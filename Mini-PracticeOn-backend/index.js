const express = require('express');
const app = express();

//parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs'); //backend will render(view) --> ejs pages

//route setup
app.get("/", function(req, res){
    res.send("slash page");
})

app.listen(3000, ()=>{
    console.log("Chal rha hai!!");
})