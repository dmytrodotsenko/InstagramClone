import React, { Component } from 'react'
import './PostBottom.css'
import PostComments from '../comments/PostComments';


 class PostBottom extends Component {
   state = {
     likes: 0,
     newLike: false,
     savePost: false,
     comments: [],
     
   };

   componentDidMount = () =>{
     this.setState({
       likes: this.props.likes,
       comments: this.props.comments,
     });
   };
   
   addNewLike = () =>{
     const {newLike, likes} = this.state;
     this.setState({
       likes: newLike ? likes -1 : likes +1,
       newLike: !newLike,
     });
   };

   heartClick = () =>{
    return this.state.newLike ? '  red_heart' : 'heart';
  };
  
   savePosts = () =>{
    this.setState({
      savePost: !this.state.savePost,
    });
  };
   
   saveClick = () => {
     return this.state.savePost ? 'saved_post' : 'save';
   }
   
  render() {
    const {description, userName, comments} = this.props;
    const {likes} = this.state;
    return (
      <div className='post-bottom' >
        <div className = "bottom_panel">
          <span className = "buttons_like">
            <button onClick = {this.addNewLike} className = {this.heartClick()}></button>
          </span>
          <span>
            <button className = {this.saveClick()} onClick = {this.savePosts}></button>
          </span>
        </div>

        <div className = "likes">
        <p>{likes} Likes</p>
        </div>
        {description !== '' && (
          <div>
            <h3>{userName}</h3>
            <p>{description}</p>
          </div>
        )}
        <div className = "comments">
          <PostComments
          comments = {comments}></PostComments>
        </div>
      </div>
    )
  }
}
export default PostBottom;