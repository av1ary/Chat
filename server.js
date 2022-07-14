const express = require('express');

const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
/*using express and standard socket.io initialization*/

app.use(express.json());
/*This method was used to make express to consider all incoming requests as json*/

const chats = new Map(

);
/*I am using Map object because it has some functions id need such as get, has and set*/

app.get('/chats/:id', (req, res) => {
    const { id: chatID } = req.params;
    const obj = chats.has(chatID) ? {
        users: [...chats.get(chatID).get('users').values()],
        messages: [...chats.get(chatID).get('messages').values()],
    }
    : {users: [], messages: []};
    res.json(obj);
});
/*when server gets data about chat id, it checks if there is chat with similar id
* if there is such chat, we send information about users and messages related to this chat
* else we send new arrays*/

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

/* when new chat is created, we created new map for this chat
* and new chat users map and array of messages*/

io.on('connection', (socket) => {

    socket.on('CHAT:JOIN', ({chatID, userName}) => {
        socket.join(chatID)
        chats.get(chatID).get('users').set(socket.id, userName);
        const users = [...chats.get(chatID).get('users').values()];
        socket.to(chatID).emit('CHAT:SET_USERS', users);
    });
    /*when server receives this function we subscribe the socket to this channel
    * and add this socket to the users of the chat by this userName (not unique, in contrast to socketid)
    * user is values of the map, key is socket id
    * at the and we emit to all users about new user*/

    socket.on('CHAT:NEW_MESSAGE', ({ chatID, userName, text }) => {
        const obj = {
            userName,
            text,
        };
        chats.get(chatID).get('messages').push(obj);
        socket.to(chatID).emit('CHAT:NEW_MESSAGE', obj);
    });
    /*When new message is added, we receive authors userName as well
    * then add it to the messages array and emit all users about new message*/

    socket.on('disconnect', () => {
        chats.forEach((value, chatID) => {
            if (value.get('users').delete(socket.id)) {
                const users=[...value.get('users').values()];
                socket.to(chatID).emit('CHAT:SET_USERS', users);
            }
        });
    });
    /*when socket disconnects, we update the users list*/

    console.log('User connected', socket.id);
    /*we look for each new socket*/

});

server.listen(7212, () => {
    console.log('listening on 7212');
});
/*server will listen this proxy*/
