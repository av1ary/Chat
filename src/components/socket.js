import {io} from 'socket.io-client'
/*// here i need only client side socket, because server side is
// already sharing everything with my
// so i have to know where from take it
// and them use in ui*/

const socket = io('http://localhost:7212', {transports:['websocket']});
/*// there was an issue when i was using proxy from package.json
// i was not able to determine transposts type in package.json
// but saving proxy rifht here would be unwise, because when i am changing the server side proxy
// i will have to change it everywhere else, it is not optimal*/

export default socket;

/*
//In fact im using this js to connect server side socket with client side socket*/
