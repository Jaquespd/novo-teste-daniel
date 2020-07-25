const express = require('express');
const http = require('http');
const cors = require('cors');

const { setupWebsocket } = require('./src/Services/websocket');

const router = require('./router.js');

const app = express();
const server = http.createServer(app);

setupWebsocket(server);

app.use(cors());
app.use(router);

server.listen(3333);