import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import JoinBlock from "./components/JoinBlock/JoinBlock";
import reducer from "./components/reducer";
import socket from "./components/socket";
import Dialog from "./components/Dialog/Dialog";

function App() {

    const [state, dispatch] = React.useReducer(reducer, {
        isAuth: false,
        chatID: null,
        userName: null,
    });

    const onLogin = (obj) => {
        dispatch({
            type: 'IS_AUTH',
            payload: obj,
        });
        socket.emit('CHAT:JOIN', obj)
    };

    React.useEffect(() => {
        socket.on('CHAT:JOINED', (users) => {

        });
    }, []);


    return (

        <div>
            {!state.isAuth ? (<JoinBlock onLogin={onLogin}/>) : (<Dialog/>)}
        </div>
    )};


export default App;
