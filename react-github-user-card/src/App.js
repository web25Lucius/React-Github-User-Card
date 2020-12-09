import React from 'react';
import CardList from './components/CardList';
import axios from 'axios';
import './App.css';


export default class App extends React.Component{
  constructor(){
    super();
    this.state.list = {
      
    };
     axios.get('https://api.github.com/users/web25Lucius/followers')
    .then(response=>{
      console.log(response.data)
      this.list.push(response.data);
    })
    .catch(error=> {
      console.log(error)
    })

 
  }
  render()
  {
  return (
    <div className="App">
      <header className="App-header">
       <h1>GitHub Pals</h1>
      </header>
      <CardList list={this.list}></CardList>
    </div>
  )} 
};