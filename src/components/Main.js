import React, {Component} from 'react';

class Main extends Component {
  render(){
    console.log("=== Main Render ===");
    return (
      <div className="main">
        <span>우리의 롤링페이퍼</span>
        <input type="button" value="글쓰기"></input>
      </div>
    );
  }
}

export default Main;
