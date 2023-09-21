import React from 'react'
import { useQuiz } from './contexts/QuizProvider'

export default function Header() {

  const {maxQuestions, index, score, answer, totalPoint} = useQuiz()

  return (
    <header>
    <h1 className="title">The React Quiz</h1>
    <div className="progress-container">
        <progress value={answer !== null ? index + 1 : index} max={maxQuestions}></progress>
        <div className="flex">
            <p>Question <strong>{index + 1} </strong>/ {maxQuestions}</p>
            <p>Points <strong>{score} </strong>/ {totalPoint}</p>
        </div>
    </div>
</header>
  )
}
