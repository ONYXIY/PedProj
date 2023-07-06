import React from "react";
import styles from './Users.module.css';
import usersPhoto from '../../assets/imges/image.png';
import { NavLink } from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })};

        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                         className={styles.userPhoto} alt='avatar' />
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '6e6b632d-eef2-4ab7-875b-72e622c6a1d1'
                                }
                            })
            .then(response => {
                if (response.data.resultCode === 0){
                    props.unfollow(u.id);
                }
                props.toggleIsFollowingProgProgress(false, u.id)
            });
                            

                         }}>unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials: true,
                                
                            })
            .then(response => {
                if (response.data.resultCode === 0){
                    props.follow(u.id);
                }
                props.toggleIsFollowingProgProgress(false, u.id)
            });
                         }}>follow</button>
                    };
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
        )};
    </div>
};

export default Users;