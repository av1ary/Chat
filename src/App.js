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
    /*this ract hook is used for initial state*/

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
    /*this  arrow function is created to send data from user to the back end*/

    const setUsers= (users) => {
        dispatch({
        type: 'SET_USERS',
        payload: users,
    });
    };
    /*arrow function to */

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
    /*we need to use this hook to side effect porcess whithour renrendering.
    So we can send new messages and update users list with no bugs*/

    return (
        <div>
            {!state.isAuth ? (<JoinBlock onLogin={onLogin}/>) : (<Dialog {...state} onNewMessage={newMessage}/>)}
        </div>
    )};
/* if the user has "authorized status, then we render his chat, else we render authrizatoin block"*/

export default App;
