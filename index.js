const express = require('express');

const app = express();
const port = 3000; //server listens in port

app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.get('/twitter', (req, res)=>{
    res.send('gargieesingh');
})

app.get('/login',(req, res)=>{
    res.send('<h1>Please login here.</h1>');
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>Youtube written</h2>")
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})
