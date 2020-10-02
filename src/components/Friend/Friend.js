import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    console.log(props.friend);
    const {name, email, phone, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`);
    }
    return (
        <div style={{border: '1px solid purple', borderRadius: '20px', width: '90%', margin: '0 auto 20px', paddingLeft: '20px'}}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}> <button>See more about {id}</button></Link></p>
            <button onClick={ () => handleClick(id)}> Click Me</button>
        </div>
    );
};

export default Friend;