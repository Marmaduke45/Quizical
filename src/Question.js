import he from "he"
import React from "react";
export default function Question(props) {
   let answerEls
    React.useMemo(() => {
        answerEls = props.answers.map((answer, ind) => {
            // const selectedStyles = selected ? {backgroundColor: "green"} : {backgroundColor: "white"}
            return <div 
                        key={ind} 
                        question={props.value} 
                        // value={he.decode(answer)}
                        selected={false}
                        // style={selectedStyles}
                        onClick={() => props.handleClick(he.decode(answer), Number(props.value))} 
                        className="answer">
                            {he.decode(answer)}
                    </div>
        })
    },[props])

    return (
    <li className="question-container">
        <h3 className="question">{he.decode(props.question)}</h3>
        <div className="answer-container">
            {answerEls}
        </div>
    </li>
    )

}