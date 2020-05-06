import React, {Component} from 'react';

class Story extends Component {
  render(){
    console.log("=== Story Render ===");
    return (
      <div className="story">
        <div className="title">{this.props.title}</div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

export default Story;
