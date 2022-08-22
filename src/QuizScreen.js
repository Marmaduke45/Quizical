import React from "react";
import Question from "./Question";
import he from "he"
import Confetti from "react-confetti";

export default function QuizScreen(props){
    
    const [selectedAnswer, setAnswer] = React.useState(["","","","",""])
    const [answerArray, setAnswerArray] = React.useState(getAnswerValues(props.questionState.results))
    const [score, setScore] = React.useState(0)
    

    let correctAnswers
    getCorrectAnswers()
    
    // Getting the JSX for question Elements
    let questionsEl = React.useMemo(() => {
        // Selects the answer and puts its value in state
        function selectAnswer(buttonValue, questionVal) {
            if(props.progress === 1){
            setAnswer(prevAnswer => {
                return prevAnswer.map((answer, ind) => {
                    return ind === questionVal ? buttonValue : answer
                })
            })
        }}
        if(props.questionState){
            
            return props.questionState.results.map((q, ind) => {
                return <Question 
                key={ind} 
                value={ind} 
                question={q.question} 
                handleClick={selectAnswer}
                progress={props.progress}
                correctAnswers={correctAnswers}
                state={selectedAnswer} 
                answers={answerArray[ind]}
                />
            }) 

    }},[selectedAnswer, props.progress, answerArray, correctAnswers, props.questionState])


    // maps all the shuffled answers into a large array
    function getAnswerValues(questionState) {
        if(questionState){
            // console.log('getting answer values')
            return questionState.map(question => {
               return shuffleAnswers([...question.incorrect_answers, question.correct_answer])
            })
        }
    }
    
    // Shuffles one question's answers
    function shuffleAnswers(arr) {
        // console.log('shuffling answers')
        arr.sort(() => Math.random() - 0.5);
        return arr
    }
    
    
    // Gets an array of the correct answers in order
    function getCorrectAnswers() {
        if(props.questionState.results){
            // console.log('getting correct answers')
            correctAnswers = props.questionState.results.map(questions => {
                return he.decode(questions.correct_answer)
                })
        }
    }

    // Checks your score and gives your final marks
    function checkAnswers() {
        // console.log('checking answers')
        if(checkAllAnswered() === 5){
            props.handleFinish()
            for(let i = 0; i < correctAnswers.length; i++){
                if(correctAnswers[i] === selectedAnswer[i]){
                    setScore(prevScore => prevScore + 1)
                }
            }
        }else{
            alert('You must answer all questions')
        }

    }


    // Makes sure every question is answered
    function checkAllAnswered() {
        return selectedAnswer.filter(answer => Boolean(answer) === true).length
    }


    // React.useEffect(() => console.log(props.questionState.results), [props.progress])
    
    return  <div className="quiz-screen">
                {props.progress === 2 && score === 5 && <Confetti />}
                <ul className="question-list">
                    {questionsEl && questionsEl}
                </ul>
                {props.progress === 1 && <button onClick={checkAnswers} className="btn answers-btn">Check answers</button>}
                {props.progress === 2 && <p className="score">You Got: {score}/5!</p>}
                {props.progress === 2 && <button onClick={props.handleRestart} className="btn answers-btn">Restart</button>}
            </div>
}