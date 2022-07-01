const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const chats = new Map(

);

app.use(express.json());

app.get('/chats', (req, res) => {
    res.json(chats);
});

app.post('/chats',(req, res) => {
    const {chatID, UserName} = req.body;
        if(!rooms.has(chatID)){
            rooms.set(chatID, new Map([
                ['Users', new Map()],
                ['mess', []],
                ]),
            );
        }
    res.send([...chats.values()]);
});



io.on('connection', (socket) => {
    console.log('User connected', socket.id);
});

server.listen(7212, () => {
    console.log('listening on *:7212');
});