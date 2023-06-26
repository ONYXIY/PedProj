import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  
  }
  return (
    <div className={classes.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={classes.posts}>

          {postsElement}

        </div>
      </div>
    </div>
  )
}
export default MyPosts;