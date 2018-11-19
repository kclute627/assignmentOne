import React from 'react';



const Count = (props)=>{



    return (
        <div className="UserOutput">
            <h1>Count: {props.count}</h1>
            <button
            type="submit"
            onClick={props.add}>Add Count</button>
            <button
            type="submit"
            onClick={props.sub}>Subtract Count</button>
            <button
            type='submit'
            onClick={props.reset}>Reset Counter</button>

        </div>



    )
}





























export default Count;