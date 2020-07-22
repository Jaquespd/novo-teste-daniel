const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./UserController.js');

const PORT = process.env.PORT || 3333;

const router = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {
  socket.on('join', ({ name, room }) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    socket.emit('message', { user: 'Swiftfox Team', text:`Hello ${user.name}, welcome to the room ${user.room}` })
    socket.broadcast.to(user.room).emit('message', {user: 'Swiftfox Team', text:`${user.name}, has joined.`});

    socket.join(user.room);

  });

  socket.on('sendMessage', (message) =>{
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message});

  });

  socket.on('disconnect', () => {
    console.log("WS Server - Disconnected");
  })
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log('🚀 Back-end started!')); 