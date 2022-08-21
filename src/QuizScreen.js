import React from "react";
import Question from "./Question";
import he from "he"

export default function QuizScreen(props){
    
    const [selectedAnswer, setAnswer] = React.useState(["","","","",""])
    let correctAnswers
    getCorrectAnswers()

    let questionsEl = React.useMemo(() => {
        if(props.questionState){
            let answerArray = getAnswerValues(props.questionState.results)
            console.log(props.questionState.results)
            return props.questionState.results.map((q, ind) => {
                return <Question 
                key={ind} 
                value={ind} 
                question={q.question} 
                handleClick={selectAnswer} 
                state={selectedAnswer} 
                answers={answerArray[ind]}
                />
            })
            
    }},[props.questionState])

    function getAnswerValues(questionState) {
        // console.log(questionState)
        if(questionState){
            return questionState.map(question => {
               return shuffleAnswers([...question.incorrect_answers, question.correct_answer])
            })
        }
    }
 
    function shuffleAnswers(arr) {
        arr.sort(() => Math.random() - 0.5);
        return arr
    }
    
    
    
    function getCorrectAnswers() {
        if(props.questionState.results){
            correctAnswers = props.questionState.results.map(questions => {
                return he.decode(questions.correct_answer)
                })
        }
    }

    function checkAnswers() {

        // let score = 0;
    }

    function selectAnswer(buttonValue, questionVal) {
        console.log(buttonValue, questionVal)

        setAnswer(prevAnswer => {
            return prevAnswer.map((answer, ind) => {
                return ind === questionVal ? buttonValue : answer
            })
        })
    }

    React.useEffect(() => {
        console.log(selectedAnswer)
    },[selectedAnswer])

    React.useEffect(() => {
        console.log(questionsEl)
    },[questionsEl])

    return  <div className="quiz-screen">
                <ul className="question-list">
                    {questionsEl && questionsEl}
                </ul>
                <button onClick={checkAnswers} className="btn answers-btn">Check answers</button>
            </div>
}