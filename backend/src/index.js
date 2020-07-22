const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3333;

const router = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket) => {
  console.log("WS Server - Connected");

  socket.on('join', ({ name, room }) => {
    console.log('User:', name);
    console.log('Room:', room);
  });

  socket.on('disconnect', () => {
    console.log("WS Server - Disconnected");
  })
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log('🚀 Back-end started!')); 