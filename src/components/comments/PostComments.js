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
      else if (comments.length <= 3) {
        return(
      <div >
      {[...comments].map((element) => (
        <div  key={`${element}_${Math.random()}`}>
          <div className="comment_container">
              <div className="comment_text">
                <h5>Comment</h5>
                <div >{element}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
      )
  
  }
  else {
    
    return (
      <div >
        <div>
         Show all comments ({comments.length})
        </div>
        {[...comments].map((element, index) => (
          index < 3 ? (
            <div
              key={`${element}_${Math.random()}`}
            >
              <div className="comment_container">
                <div>
                  <div className="comment_text">
                    <h5>Comment </h5>
                    <div >{element}</div>
                  </div>
                </div>
                </div>
              </div>
            )
            :
            null))
        }
      </div>
    );
  }
}
 }
export default PostComments;