const express = require('express');
const app = express();

//parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs'); //backend will render(view) --> ejs pages

//route setup
app.get("/", function(req, res){
    // res.render("chachi"); //chachi is a page which should present in views
    res.render("index"); //dont write full name as already set up ejs as view engine
})

app.listen(3000, ()=>{
    console.log("Chal rha hai!!");
})