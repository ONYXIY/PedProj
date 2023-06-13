import React from 'react';
import classes from './Nav/Nav.module.css'


const fastFriend = (props) => {

    let bestFriend = props.friend.map(friend => (<fastFriend friends={props.friend} id={props.id} />))
    return <div className={classes.item}>
        <div className={classes.wrapper}>
            {bestFriend}
        </div>
    </div>
}

export default fastFriend;