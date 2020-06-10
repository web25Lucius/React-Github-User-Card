import React from 'react';
import Card from './Card'
import '../App.css';

function CardList(props) {
  console.log(props)
  return (
    <div className="App">
      {props.list.map(person => {
       return <Card name={person.name} login={person.login} location={person.location} bio={person.bio} avatar_url={person.avatar_url}/>
      })} 
      
    </div>
  );
}

export default CardList;
