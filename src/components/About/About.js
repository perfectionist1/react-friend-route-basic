import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
   const {friendId} = useParams();
   const [friend, setFriend] = useState({});
   const {name, website, phone, email} = friend;
   useEffect( () => {
       const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
       fetch(url)
       .then(res => res.json())
       .then( data => setFriend(data))
   }, []);
   
   const friendStyle = {
       width: '60%',
       margin: '100px auto 20px', 
       border: '5px solid green',
       borderRadius: '20px',
       padding: '20px 0 20px 100px',
   };
    return (
        <div style={friendStyle}>
            <h2>The User: {friendId}</h2>
            <p>The Friend's name is <strong> {name}</strong></p>
            
            <p>Friend's website is: {website}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>


        </div>
    );
};

export default About;