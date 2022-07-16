import classes from './Messages.module.css'
import React from 'react'

function Messages(props) {
    return(

        <div className={classes.message}>
            <p>{props.message.text}</p>
            <div>
                <span className={classes.messageSender}>{props.message.userName}</span>
            </div>
        </div>

    )};

export default Messages