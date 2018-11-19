import React from 'react';
import UserOutput from './UserOutput';




const Userinput=(props)=>{

    const style={
        border: '2px solid red',

    };

    return (
        <div>
            <input
            type='text'
            style={style}
            onChange={props.change}
            placeholder={props.currentName}>
            </input>
            <div>
            <button
            onClick={props.newoutput}>Submit Username</button>
            
            </div>
            

        </div>
    )
}










export default Userinput;