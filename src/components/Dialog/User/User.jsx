import classes from './User.module.css'
import React from 'react'

function User(props) {

    return(

    <div
        className={classes.user} key={props.name + props.index}>
        <div className={classes.userName}> {props.name} </div>
    </div>
)};

export default User
