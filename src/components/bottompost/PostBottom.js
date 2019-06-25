import React, { Component } from 'react'
import './PostBottom.css'


 class PostBottom extends Component {
   state = {
     likes: 0,
     newLike: false,
     savePost: false,
     
   };

   componentDidMount = () =>{
     this.setState({
       likes: this.props.likes,
       

     })
   };
   
   addNewLike = () =>{
     const {newLike} = this.state;
     this.setState({
       likes: newLike ? this.state.likes -1 : this.state.likes +1,
       newLike: !this.state.newLike,
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
   

   saveClick = () =>{
     return this.state.savePost ? 'saved_post' : 'save';
   }
   

  render() {
    const {description, userName} = this.props;
    const {likes} = this.state;
    return (
      <div >
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
        {description != '' && (
          <div>
            <h3>{userName}</h3>
            <p>{description}</p>
            
            
          </div>
        )}
        
        <div>
         
        </div>
      </div>
    )
  }
}
export default PostBottom;