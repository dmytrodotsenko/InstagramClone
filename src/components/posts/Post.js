import React from 'react';
import './Post.css'
import PostBottom from '../bottompost/PostBottom';

class Post extends React.Component {
  state = {
  }
  render() {
    const {
      imageUrl,
      avatar,
      userName,
      likes,
      
    } = this.props.element;

    return (
      <div className="post">
        <div className="post_title">
          <div className="group_title">
            <img src={avatar}></img>
            <p>{userName} </p>
          </div>
          
        </div>
        <div className="content">
          <img src={imageUrl}></img>
        </div>
        <PostBottom 
        likes = {likes}>

        </PostBottom>
      </div>
    );
  }
}

export default Post;