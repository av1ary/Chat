import classes from './Dialog.module.css'
import React from 'react'



function Dialog() {
return(
    <div className={classes.dialog_page}>
        <div className={classes.users}>Users</div>
        <div className={classes.chat}>Chat</div>
    </div>
)};

export default Dialog