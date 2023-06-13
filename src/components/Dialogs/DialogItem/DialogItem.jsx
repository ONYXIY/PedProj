import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id + props.img;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}{props.ava}</NavLink>
    </div>
}


export default DialogItem;