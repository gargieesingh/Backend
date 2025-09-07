const express = require('express');

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


app.use(function(req, res, next){
    console.log('Middleware Chala');
    next();
});
app.use(function(req, res, next){
    console.log('Middleware Chala ek aur baar');
    next();
});

app.get('/', function(req, res){
    res.send('/ page hai ye');
})
app.get('/profile', function(req, res){
    res.send("profile page hai ye");
})


app.listen(3000);