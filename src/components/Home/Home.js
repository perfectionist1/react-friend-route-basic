import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
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
};

export default Home;