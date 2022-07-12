import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import JoinBlock from "./components/JoinBlock/JoinBlock";
import reducer from "./components/reducer";
import socket from "./components/socket";
import Dialog from "./components/Dialog/Dialog";
import axios from 'axios';

function App() {

    const [state, dispatch] = React.useReducer(reducer, {
        isAuth: false,
        chatID: null,
        userName: null,
        users: [],
        messages: [],
    });

    const onLogin = async (obj) => {
        dispatch({
            type: 'IS_AUTH',
            payload: obj,
        });
        socket.emit('CHAT:JOIN', obj)

        const {data} = await axios.get(`/chats/${obj.chatID}`);
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    };

    const setUsers= (users) => {
        dispatch({
        type: 'SET_USERS',
        payload: users,
    });
    };

    const newMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };


    React.useEffect(() => {
        socket.on('CHAT:SET_USERS', setUsers);
        socket.on('CHAT:NEW_MESSAGE', newMessage);
    }, []);

    return (
        <div>
            {!state.isAuth ? (<JoinBlock onLogin={onLogin}/>) : (<Dialog {...state} onNewMessage={newMessage}/>)}
        </div>
    )};

export default App;
