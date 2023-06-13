import React from 'react';
import classes from './../Dialogs.module.css';



const Mess = (props) => {
    return <div className={classes.dialogData}>{props.message}</div>
}

export default Mess;