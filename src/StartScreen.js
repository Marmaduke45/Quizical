import React from "react";

export default function StartScreen (props) {
    return <div className='start-screen'>
                <h1>Quizzical</h1>
                <button className='btn start-btn' onClick={props.handleClick}>Start quiz</button>
            </div>
}