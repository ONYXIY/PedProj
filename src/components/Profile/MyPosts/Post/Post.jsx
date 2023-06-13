import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return <div className={classes.post}>
    <img alt='avatar' src='https://avatars.mds.yandex.net/i?id=05041187d10244562b7dff5ffb62df4012dfb48f-9244694-images-thumbs&n=13' />
    {props.message}
    <div>
      <span>Like</span>{props.likeCount}
    </div>
  </div>

}
export default Post;