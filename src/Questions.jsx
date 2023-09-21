import React from 'react'
import { useQuiz } from './contexts/QuizProvider'

export default function Questions() {

    const {questions, dispatch, answer, index} = useQuiz()
    const question = questions.at(index)

    const hasAnswered = answer !== null
  return (
    <>


        <div className="question">
            <h1>{question.question}</h1>

            {question.options.map((option, index) => (
                <div className="options" key={option}>
                    <button className={ `option ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""} ${index === answer ? "answer" : ""}`} disabled={hasAnswered} onClick={()=> dispatch({type:"answer", payload: index})}>{option}</button>
                </div>
            ))}
        </div>


    </>

  )
}
