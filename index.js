const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/login.html',(req, res)=>{
    res.sendFile(__dirname+'/login.html');
})

app.get('/dynamic.html',(req, res)=>{
    res.sendFile(__dirname+'/dynamic.html');
})

app.listen(port,() =>{
    console.log('Example app listenning on port ${port}');
})
