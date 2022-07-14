import classes from './User.module.css'
import React from 'react'

function User(props) {

return(

    <li key={props.name + props.index}>{props.name}</li>
)};

export default User
