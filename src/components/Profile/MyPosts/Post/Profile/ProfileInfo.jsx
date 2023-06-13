import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return <div>
  <div>
    <img alt='bigImg' src='https://sun9-21.userapi.com/c841335/v841335689/6e386/P1RdAJ6ubvU.jpg'></img>
    </div>
    <div className={classes.descriptionBlock}>
    ava + description
  </div>
  </div>

}
export default ProfileInfo;