import classes from './Dialog.module.css'
import React from 'react'
import User from './User/User'
import socket from '../socket';
import Messages from "./Messages/Messages";


function Dialog({ users, messages, userName, chatID, onNewMessage }) {

    const [messageInArea, setMessageInArea] = React.useState('')
    const messagesRef = React.useRef(null);

    const onSendMessage = (e) => {

        socket.emit('CHAT:NEW_MESSAGE', {
            userName,
            chatID,
            text: messageInArea,
        });
        onNewMessage({ userName, text: messageInArea });
        setMessageInArea('');
    };

    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

    return(

    <div className={classes.dialog_page}>

        <div className={classes.users}>
            Users ({users.length}):
            {users.map((name, index) => (
                <User name={name} index={index}/>
            ))}
        </div>


        <div className={classes.chat}>

            <div className={classes.chatPage}>

                <div ref={messagesRef} className="messages">
                    {messages.map((message) => (
                        <Messages message={message}/>
                    ))}
                </div>

            </div>

        <form className={classes.insertForm}>
            <textarea value={messageInArea}
                      onChange={(e) => setMessageInArea(e.target.value)}
                      rows='4'
                      cols='144'
            >

            </textarea>
            <div className={classes.sendBottom}>
            <button className='btn btn-primary' onClick={onSendMessage }> Send </button>
            </div>
        </form>

        </div>

    </div>
)};

export default Dialog