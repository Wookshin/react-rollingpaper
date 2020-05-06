import React, {Component} from 'react';

class Card extends Component {
  render(){
    console.log("=== Card Render ===");
    return (
      <div className="card col-md-4" data-id={this.props.id} onClick={function(e){
        this.props.cardClicked(e.currentTarget.dataset.id);  
      }.bind(this)}>
        <div className="title">{this.props.title}</div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

export default Card;
