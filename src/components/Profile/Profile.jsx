import React from 'react';
import ProfileInfo from './MyPosts/Post/Profile/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
  return <div>
    <ProfileInfo profile={props.profile}/>
    <MyPostsContainer />
  </div>

}
export default Profile;

