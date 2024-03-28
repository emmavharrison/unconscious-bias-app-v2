import React from "react";
import { QuizCardV2 } from "./QuizCardV2";
import questionsData from "../questions.json";
import { Button } from "@/components/ui/button"

export const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0)

  const next = () => {
    console.log(currentQ)
    setCurrentQ(old => old + 1)
  }

  const previous = () => {
    console.log(currentQ)
    setCurrentQ(old => old - 1)
  }

  return (
    <div>
      <Button onClick={previous} >previous</Button>
      {questionsData.questions.map((question, index) => (
        <QuizCardV2 key={index} question={question} />
      ))}
      <Button onClick={next} >next</Button>
    </div>
  )
}
