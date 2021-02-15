import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        friendCard: {
          "avatar_url": "",
          "login": "", 
          "url": "", 
          "repos_url": ""
        },
        friendList: [{}]
    }
    
  }
  render(){
  return (
    <div>
      <header >Power to the <span aria-label="Emoji of closed Black hand raised in solidarity.">✊🏽</span></header>
      <h3>Roll Call:</h3>

      
    </div>
  );
  }
}

export default App;
