import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Mess from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.img}/>);

    let messagesElement = props.state.messages.map(message => <Mess message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messagesElement}

            </div>
        </div>
    )
}
export default Dialogs;