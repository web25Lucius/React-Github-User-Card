import React from 'react';
import '../App.css';

function Card(props) {
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>{props.login}</h3>
        <p>{props.name}</p>
        <div>
          <img src={props.avatar_url} alt={props.name} key={props.name}/>
          <p>{props.location} <br/> {props.bio}</p>
      </div>
      </header>
      
    </div>
  );
}

export default Card;
