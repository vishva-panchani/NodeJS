const express=require('express')
const http=require('http')
const socketIo=require('socket.io');

const app=express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static('public'))
io.on('connection',(socket)=>{
    console.log('A user connected');
    const clintIp=socket.handshake.address;
    console.log(`User connected with IP:${clintIp}`);

    socket.on('message',(msg)=>{
        console.log(`Received message from client: ${msg}`);
        io.emit('message',msg);
    });

    socket.on('disconnect',()=>
    {
        console.log('A user disconnected');
    })

});
server.listen(3000,()=>{
    console.log('Server started on port 3000');
});