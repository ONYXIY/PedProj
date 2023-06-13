import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);
  
  return (
    <div className={classes.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>

          {postsElement}

        </div>
      </div>
    </div>
  )
}
export default MyPosts;