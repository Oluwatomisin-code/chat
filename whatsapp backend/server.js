const { Socket } = require('dgram');
const express=require ('express');
const http= require('http');
const socketio=require('socket.io');

const app= express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket=>{
    console.log('socket connected');
    socket.on("Message", Msg =>{
        console.log(Msg);
        socket.emit("Message", {Msg})
    })
})

const PORT= 5000|| process.env.PORT

server.listen(PORT, ()=> console.log(`server is now listening to ${PORT}`));
