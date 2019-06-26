import React from 'react';
import Post from './posts/Post';
import './main_content.css'

class MainContent extends React.Component {
  state = {
    items: this.props.items,
  };

  sortItems = () => {
    this.state.items.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  };
  

  render() {
    const { items } = this.state;
    this.sortItems();
    return (
      <div className="main">
        
        <div className="posts_holder">
          {items && items.map(element => (
            <Post
              key={element.id}
              element={element}
              delPost = {this.props.delPost}
              comments = {element.comments}
             
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainContent;
