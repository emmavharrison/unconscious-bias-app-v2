import { QuizCardV2 } from "./QuizCardV2";
import questionsData from "../questions.json";
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0)

  const questionCards = questionsData.questions.map((question, index) => (
    <QuizCardV2 key={index} question={question} />
  ))

  const next = () => {
    console.log(currentQ)
    setCurrentQ(old => old + 1)
  }

  const previous = () => {
    console.log(currentQ)
    setCurrentQ(old => old - 1)
  }

  return (
    <div className="flex justify-center align-items-center gap-4">
      <Button onClick={previous} >previous</Button>
      {questionCards[currentQ]}
      <Button onClick={next} >next</Button>
    </div>
  )
}
