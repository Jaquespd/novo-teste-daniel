const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3333;

const router = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

app.listen(PORT, () => console.log('🚀 Back-end started!')); 