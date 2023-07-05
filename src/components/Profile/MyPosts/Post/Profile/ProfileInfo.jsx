import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../../../common/preloader/Preloader';

const ProfileInfo = (props) => {
  
  if(!props.profile) {
    return <Preloader />
  }
  
  return <div>
  <div>
    <img alt='bigImg' src='https://sun9-21.userapi.com/c841335/v841335689/6e386/P1RdAJ6ubvU.jpg'></img>
    </div>
    <div className={classes.descriptionBlock}>
    <img alt='largePhoto' src={props.profile.photos.large}/>
    <div>Соц сети: {props.profile.contacts.vk}</div>
  </div>
  </div>

}
export default ProfileInfo;