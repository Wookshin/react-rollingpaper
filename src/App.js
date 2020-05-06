import React, {Component} from 'react';
import Main from './components/Main.js'
import CardList from './components/CardList.js'
import Story from './components/Story.js'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
      cardId: '1'
    }
    this.cardContents =[
      {id:"1", title: "신욱이가", content:"고생하셨어요!"},
      {id:"2", title: "효신이가", content:"고생하셨어요!"},
      {id:"3", title: "우리가", content:"고생하셨어요!"}
    ]
  }

  getContent(){
    var _title, _content, _article = null;

    if(this.state.mode === 'welcome'){
      _title = '환영합니다'
      _content = '당신을 위한 롤링페이퍼!'
      _article = <Story title={_title} content={_content}/>  
    }
    else if(this.state.mode === 'read'){
      var i=0;
      while (i < this.cardContents.length){
        if(this.cardContents[i].id === this.state.cardId){
          _title = this.cardContents[i].title;
          _content = this.cardContents[i].content;
          _article = <Story title={_title} content={_content}/>  
          break;
        }
        i=i+1;
      }
    
    }

    return _article;
  }

  render(){
    console.log("=== APP Render ===");
    return (
      <div className="App">
        <Main />
        <CardList cardContents={this.cardContents} cardClicked={function(id){
          this.setState({
            mode: 'read',
            cardId: id
          });
        }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
