import React, {Component} from 'react';
import Card from './Card.js'

class CardList extends Component {

  // getCard(){
  //   let cardArray = [];
  //   var i = 0;
  //   var cardContents = this.props.cardContents;
  //   while(i< this.props.cardContents.length){
  //     debugger;
  //     cardArray.push(<Card key={cardContents[i].id} title={cardContents[i].title} content={cardContents[i].content} onClick={this.props.cardClicked}/>)
  //     i=i+1;
  //   }
    
  //   return cardArray;
  // }

  render(){
    console.log("=== CardList Render ===");
    return (
      <div className="cardList row">
        {this.props.cardContents.map((cardContent, props) => (
         <Card id={cardContent.id} title={cardContent.title} content={cardContent.content} cardClicked={this.props.cardClicked}/>
        ))}
        {/* {this.getCard()} */}
      </div>
    );
  }
}

export default CardList;
