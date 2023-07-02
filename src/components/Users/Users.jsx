import React from 'react';
import styles from './Users.module.css';


let Users = (props) => {
    if(props.users.length === 0) {
    props.setUsers(
        [
            { id: 1, photoUrl: 'https://i.pinimg.com/736x/e8/62/35/e862350d57ef39504ab4310d1554c6d8.jpg', followed: false, fullName: 'Rustam', status: 'im React pro', location: { city: 'Chelyabinsk', country: 'Russia' } },
            { id: 2, photoUrl: 'https://i.pinimg.com/736x/e8/62/35/e862350d57ef39504ab4310d1554c6d8.jpg', followed: false, fullName: 'John', status: 'im pro player', location: { city: 'NY', country: 'USA' } },
            { id: 3, photoUrl: 'https://i.pinimg.com/736x/e8/62/35/e862350d57ef39504ab4310d1554c6d8.jpg', followed: true, fullName: 'Arina', status: 'twitchTV', location: { city: 'Chelyabinsk', country: 'Russia' } }
        ]
    )
}
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>follow</button>

                    }

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;