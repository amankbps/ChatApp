
const express=require('express');
const app=express();
const socketio=require('socket.io');
const http = require('http');
const server = http.createServer(app);

const io=socketio(server);


app.use('/',express.static(__dirname+'/public'));

app.listen(3000,()=>{
    console.log(`Server started`);
});