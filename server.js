const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.json());

const chats = new Map(

);


app.get('/chats/:id', (req, res) => {
    const { id: chatID } = req.params;
    const obj = chats.has(chatID) ? {
        users: [...chats.get(chatID).get('users').values()],
        messages: [...chats.get(chatID).get('messages').values()],
    }
    : {users: [], messages: []};
    res.json(obj);
});

app.post('/chats',(req, res) => {
    const {chatID, userName} = req.body;
        if(!chats.has(chatID)){
            chats.set(chatID, new Map([
                ['users', new Map()],
                ['messages', []],
                ]),
            );
        }
    res.send();
});

io.on('connection', (socket) => {
    socket.on('CHAT:JOIN', ({chatID, userName}) => {
        socket.join(chatID)
        chats.get(chatID).get('users').set(socket.id, userName);
        const users = [...chats.get(chatID).get('users').values()];
        socket.to(chatID).emit('CHAT:SET_USERS', users);
    });

    socket.on('CHAT:NEW_MESSAGE', ({ chatID, userName, text }) => {
        const obj = {
            userName,
            text,
        };
        chats.get(chatID).get('messages').push(obj);
        socket.to(chatID).emit('CHAT:NEW_MESSAGE', obj);
    });

    socket.on('disconnect', () => {
        chats.forEach((value, chatID) => {
            if (value.get('users').delete(socket.id)) {
                const users=[...value.get('users').values()];
                socket.to(chatID).emit('CHAT:SET_USERS', users);
            }
        });
    });

    console.log('User connected', socket.id);

});

server.listen(7212, () => {
    console.log('listening on *:7212');
});

