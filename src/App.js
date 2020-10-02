import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Friend from './components/Friend/Friend';


function App() {
  const [friends, setFriends] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => setFriends(data))
  }, [])
  return (
    <div>
        <h2 style={{textAlign: 'center'}}> Friends: {friends.length} </h2>
        {
          friends.map( friend => <Friend key={friend.id} friend={friend}></Friend>)
        }
    </div>
  );
}

export default App;
