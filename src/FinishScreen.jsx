import React from 'react'
import { useQuiz } from './contexts/QuizProvider'

export default function FinishScreen() {

  const {dispatch, score, totalPoint} = useQuiz()

    const per = Number(score / totalPoint) * 100
    let emoji = ""
    if(per === 100) emoji = "🥇"
    if(per >= 70 && per < 100) emoji = "😊"
    if(per >= 50 && per < 70) emoji = "🤦‍♂️"
    if(per < 50) emoji = "😢"
    if(per === 0) emoji = "😖"
    
  return (
    <section className="finish-quiz">
        <header>
        <h1 style={{fontSize: "1.5em"}}> congrats you finished the quiz!</h1>
        <p style={{fontSize: "1.2em", lineHeight: "1.2em"}}> {emoji} You scored {score} out of {totalPoint}, ({per}%)</p>
        <button className="btn" style={{padding: "15px 20px", fontSize: "18px"}} onClick={(()=> dispatch({type:"reset"}))}>Restart Quiz</button>
    </header>
</section>
  )
}
