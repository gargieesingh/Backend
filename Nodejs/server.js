const fs = require('fs');

//fs.writeFile(file, data[, options], callback)
fs.writeFile("hey.txt", "hey hello aise ho", function(err){
    if(err) console.error(err);
    else console.log("done");
})