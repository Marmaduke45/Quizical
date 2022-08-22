import he from "he"
import React from "react";
export default function Question(props) {


let answerEls
if(props.answers){
    answerEls = props.answers.map((answer, ind) => {
                        let selectedStyles = {backgroundColor: "#fff"}
                        for(let i = 0; i < props.state.length; i++){
                            if(he.decode(answer) === props.state[i] && props.progress === 1){
                                selectedStyles = {backgroundColor: "#ddd"}
                            }else if(he.decode(answer) === props.correctAnswers[i] && props.progress === 2){
                                selectedStyles = {backgroundColor: "#8AD896"}
                            }else if(he.decode(answer) === props.state[i] && props.progress === 2){
                                selectedStyles = {backgroundColor: "#FF8385"}
                            }
                        }
                        return <div 
                                    key={ind}
                                    value={he.decode(answer)}
                                    question={props.value} 
                                    style={selectedStyles}
                                    onClick={() => props.handleClick(he.decode(answer), Number(props.value))} 
                                    className="answer">
                                        {he.decode(answer)}
                                </div>
                    })
                }
    return (
    <li className="question-container">
        <h3 className="question">{he.decode(props.question)}</h3>
        <div className="answer-container">
            {answerEls && answerEls}
        </div>
    </li>
    )

}