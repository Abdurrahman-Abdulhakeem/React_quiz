import React from 'react'
import { useQuiz } from './contexts/QuizProvider'

export default function StartScreen() {

  const {dispatch, maxQuestions } = useQuiz()

  return (
    <section class="start-quiz">
      <header>
        <h1 style={{fontSize: "2em"}}>Welcome to the React Quiz</h1>
        <h1 style={{fontSize: "2em"}}>{maxQuestions} questions to test your react mastery</h1>
        <button class="btn" style={{padding: "20px 35px", fontSize: "20px"}} onClick={(() => dispatch({type: "active"}))}>Let's Start</button>
      </header>
    </section>
  )
}
