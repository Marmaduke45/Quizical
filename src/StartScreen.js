import React from "react";

export default function StartScreen (props) {
    


    return <div className='start-screen'>
                <h1>Quizzical</h1>
                <label className="difficulty-lable" htmlFor="difficulty">Choose a difficulty: </label>
                <select className="difficulty-selector" value={props.difficulty} name="difficulty" id="difficulty" onChange={props.handleDifficulty}>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>

                <button className='btn start-btn' onClick={props.handleClick}>Start quiz</button>
            </div>
}