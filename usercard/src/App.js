import React from 'react';
import List from './components/List';


class App extends React.Component {
 
  
  render(){
  return (
    <div>
      <header >Power to the <span aria-label="Emoji of closed Black hand raised in solidarity.">✊🏽</span></header>
      <main>
        <h5>Roll Call:</h5>
        <List />
        {/* <List friendArray={this.state.friendList}  /> */}
      </main>
    </div>
  )
  }
}

export default App;
