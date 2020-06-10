import React from 'react';
import CardList from './components/CardList';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
    list : [
      {
        login: 'web25', 
        name: 'mo', 
        location: 'yo', 
        bio: 'so', 
        avatar_url: 'https://avatars3.githubusercontent.com/u/55991707?v=4'

      }
    ]
    }
  }
  //end of constructor
 

  render(){
  return (
    <div className="App">
      <header className="App-header">
       <h1>GitHub Pals</h1>
      </header>
      <CardList list={this.state.list}/>
    </div>
  );
}
}
export default App;


