import React from 'react'
import { useQuiz } from './contexts/QuizProvider'

export default function Error() {

  const {error} = useQuiz()

  return (
    <p style={{textAlign: "center"}}>😢 {error}</p>
  )
}
