import React from 'react';

const Friend = (props) => {
    console.log(props.friend);
    const {name, email, phone} = props.friend;
    
    return (
        <div style={{border: '1px solid purple', borderRadius: '20px', width: '90%', margin: '0 auto 20px', paddingLeft: '20px'}}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Friend;