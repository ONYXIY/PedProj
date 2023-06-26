import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Mess from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.img} />);
    let messagesElement = state.messages.map(message => <Mess message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>
                    {messagesElement}
                </div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>click</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;