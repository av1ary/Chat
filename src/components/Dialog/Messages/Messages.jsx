import classes from './Messages.module.css'
import React from 'react'

function Messages(props) {
    return(

        <div className="message">
            <p>{props.message.text}</p>
            <div>
                <span>{props.message.userName}</span>
            </div>
        </div>

    )};

export default Messages