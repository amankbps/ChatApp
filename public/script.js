
var socket=io();

let btn=document.getElementById('btn');
btn.onclick=function exec() {
    socket.emit('fromClient');
}
socket.on('formServer',()=>{
    console.log('collect a new event from server');
    const div=document.createElement('div');
    div.innerText='New event From server';
    document.body.appendChild(div);
});