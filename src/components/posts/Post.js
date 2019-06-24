import React from 'react';
import './Post.css'

class Post extends React.Component {
  state = {
  }
  render() {
    const {
      imageUrl,
      avatar,
      userName,
      
    } = this.props.element;

    return (
      <div className="post">
        <div className="post_topblock">
          <div className="group_title">
            <img src={avatar}></img>
            <p>{userName} </p>
          </div>
          
        </div>
        <div className="content">
          <img src={imageUrl}></img>
        </div>
      </div>
    );
  }
}

export default Post;