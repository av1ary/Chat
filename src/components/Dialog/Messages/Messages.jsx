import classes from './Messages.module.css'
import React from 'react'

function Messages(props) {
    return(

        <div >
            <p className={classes.message}>{props.message.text}</p>
            <div>
                <span>{props.message.userName}</span>
            </div>
        </div>

    )};

export default Messages