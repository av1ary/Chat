import classes from './User.module.css'
import React from 'react'

function User(props) {

return(

    <div className={classes.user}>
        <img/>
        <div className={classes.userName}> {props.userName}</div>
    </div>

)};

export default User
