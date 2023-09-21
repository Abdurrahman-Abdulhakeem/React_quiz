import React, { useEffect } from 'react'
import { useQuiz } from './contexts/QuizProvider'

export default function Footer() {

  const {dispatch, index, maxQuestions, answer, secRemain} = useQuiz()

  const mins = Math.floor(secRemain / 60)
  const sec = secRemain % 60

  useEffect(()=> {
    const id = setInterval(()=> {
      dispatch({type: "tick"})
    }, 1000)

    return () => clearInterval(id)
  },[dispatch])

  return (
    <footer>
    <div className="flex">
      <button className="btn"> {mins < 10 && 0}{mins}: {sec < 10 && 0}{sec}</button>

      { answer !== null ?
        index + 1 === maxQuestions ?
        <button className="btn" onClick={(() => dispatch({type: "finish"}))}>Finish</button> :
        <button className="btn" onClick={(() => dispatch({type: "nextQuestion"}))}>Next</button>: ""
      }
    </div>
  </footer>
  )
}
