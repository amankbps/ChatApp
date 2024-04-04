
const express=require('express');
const http = require('http');
const socketio=require('socket.io');


const app=express();
const server = http.createServer(app);

const io=socketio(server);


io.on('connection', (socket) => {
   
    console.log('a user connected',socket.id);

    socket.on('fromClient',()=>{
      console.log('evern coming from client');
    })

    setInterval(() => {
      socket.emit('formServer');
    }, 2000);
  });

app.use('/',express.static(__dirname+'/public'));

server.listen(3000,()=>{
    console.log(`Server started`);
});