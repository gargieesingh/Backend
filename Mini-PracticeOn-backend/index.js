const express = require('express');
const app = express();
const path = require('path');

//parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//using css , images, vanilla js for setting up public static files

app.use(express.static(path.join(__dirname, 'public'))); 
//sari static files(images, vdos, stylesheets, vanilla js) ko dudhne k liye public me jana
//__dirname --> name (or path) of the folder we are working on
//console.log(__dirname + '/public')--> uss path me last me public folder bhi add ho jayega. i.e. public folder tak ka path
//path.join ---> does the same work

app.set('view engine', 'ejs'); //backend will render(view) --> ejs pages

//route setup
app.get("/", function(req, res){
    // res.render("chachi"); //chachi is a page which should present in views
    res.render("index"); //dont write full name as already set up ejs as view engine
})

app.listen(3000, ()=>{
    console.log("Chal rha hai!!");
})