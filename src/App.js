import React from "react";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";



function App() {

  // Tracks progress in quiz between 0 and 2
  const [progressState, setProgress] = React.useState(0)

  // Holds the array of questions and answers
  const [questionState, setQuestions] = React.useState([])

  // Boolian isLoading for api request
  const [isLoading, setIsLoading] = React.useState([true])



  function startQuiz() {
    setProgress(1)
    getQuestions()
  }

  function finishQuiz() {
    setProgress(2)
  }

  function restartQuiz() {
    setIsLoading(true)
    setProgress(0)
  }

  // Get a list of 10 Questions from the Quiz API
  function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    .then(res => res.json())
    .then(data => {
      setQuestions(data)
      setIsLoading(false)
    })
    .catch(error => console.error(error))
  }


    return (
      <div className="app">
        {progressState === 0 && <StartScreen handleClick={startQuiz} />}
        {progressState > 0 && !isLoading && <QuizScreen questionState={questionState} handleRestart={restartQuiz} handleFinish={finishQuiz} progress={progressState} />}
      </div>
    );
}

export default App;
