import React from 'react';
import './UserOutput.css';




const UserOutput=(props)=>{



    return (
        <div className='UserOutput'>
            <p>Username: {props.username} </p>
            <p>Some random Task</p>

        </div>
    )
}










export default UserOutput;