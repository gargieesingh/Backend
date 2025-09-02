const express = require('express');

//require() --> hey node modules, bring me the code-base from that package/module so that I can use it here

// Node looks inside node_modules folder for a package named express.
// It loads the main file of Express.
// That file contains functions and objects for creating web applications.
// Finally, require('express') returns those functions.
//And we store that functions in const express

const app = express();
//express func call will return a object, and we are storing that object in app

app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(3000)