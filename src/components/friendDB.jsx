import React from 'react';
import classes from './Nav/Nav.module.css'

const friendDB = (props) =>{
return <div className={classes.friend}>{props.friend}</div>
} 

export default friendDB;