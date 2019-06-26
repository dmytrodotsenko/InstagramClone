import  React from 'react'
import './comments.css'
 class PostComments extends React.Component {
     state = {
       comments: this.props.comments,
     }
     componentDidUpdate(prevProps){
       if (this.props.comments !== prevProps.comments){
         this.setState({comments: this.props.comments})
       }
     }
   
     
  render() {   
   
    const {comments} = this.state;
    
      if (comments === undefined){
      return(
        <ul></ul>
      )
      }
      else {
        return(
      <div >
      {[...comments].map((element) => (
        <div  key={`${element}_${Math.random()}`}>
          <div className="comment_container">
              <div className="comment_text">
                <h3>Comment</h3>
                <div >{element}</div>
              </div>
      
              
            </div>
          </div>
        ))}
    </div>
      )
  
  }
}
 }
export default PostComments;