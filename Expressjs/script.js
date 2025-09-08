const express = require('express')

//require() --> hey node modules, bring me the code-base from that package/module so that I can use it here

// Node looks inside node_modules folder for a package named express.
// It loads the main file of Express.
// That file contains functions and objects for creating web applications.
// Finally, require('express') returns those functions.
//And we store that functions in const express

const app = express();
//express func call will return an object, and we are storing that object in app


//routes(routes is the part of url, which is after domain e.g. in facebook.com/profiles , /profiles is a route) create krna 

//routes tells konse page pr kya dikhega
//function(req, res) --> request handler, middleware

app.use(express.json()); //json based data ko readable krti hai
app.use(express.urlencoded({extended: true}));


app.use(function(req, res, next){
    console.log('Middleware Chala');
    next();
});
app.use(function(req, res, next){
    console.log('Middleware Chala ek aur baar');
    next();
});

//upper two were req and res handler middleware

app.get('/', function(req, res){
    res.send('/ page hai ye');
})
app.get('/profile', function(req, res, next){
    return next(new Error("Something went wrong")) //this goes on console
    res.send("profile page hai ye");
})
app.get('/trial', function(req, res){
    res.send('trail page hai ye');
})

//error handler ( special middleware )
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('Something went wrong! We dont know what'); //as it is a response , it goes on frontend 
})
app.listen(3000);