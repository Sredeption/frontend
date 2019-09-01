const express = require('express');
const http = require('http');
const socket = require('socket.io');

const server = express();
const httpServer = http.createServer(server);
const io = socket(httpServer);

// Always return the main index.html, so react-router render the route in the client
server.get('/api/hello', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!')
  }, 1500);
});

io.on("connection", (socket) => {
  console.log('connection incoming');
});

module.exports = httpServer;