import React from 'react';
import './Post.css'
import PostBottom from '../bottompost/PostBottom';


class Post extends React.Component {

 // rewrite ro constructor
  state = {

    comments: this.props.comments,
    comment: ''
  }

  
  render() {
    const {
      imageUrl,
      avatar,
      userName,
      likes,
      description,
      id,

    } = this.props.element;
    const {
      comments
    } = this.state;
    

    return (
      <div className="post">
        <div className="post_title">
          <div className="group_title">
            <img src={avatar} alt='' ></img>
            <p>{userName} </p>
            <button onClick = {this.props.delPost.bind(this, id)}  >delete</button>
          </div>
          
        </div>
        <div className="content">
          <img src={imageUrl} alt=''></img>
        </div>
        <PostBottom 
          likes = {likes}
          userName = {userName}
          description = {description}
          comments = {comments}
        />
      </div>
    );
  }
}

export default Post;