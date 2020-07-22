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
  console.log("Connected to WS server");

  socket.on('disconnect', () => {
    console.log("disconnected");
  })
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log('🚀 Back-end started!')); 