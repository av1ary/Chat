const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const chats = new Map(

);


app.get('/chats', (req, res) => {
    res.json(chats);
});

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
});

server.listen(7212, () => {
    console.log('listening on *:7212');
});
