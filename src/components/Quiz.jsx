import { QuizCardV2 } from "./QuizCardV2";
import questionsData from "../questions.json";
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState([])
  const [selected, setSelected] = useState(null)

  const updateSelected = (score) => {
    setSelected(score)
  }

  const questionCards = questionsData.questions.map((question, index) => (
    <QuizCardV2 key={index} question={question} updateSelected={updateSelected} setScore={setScore}  />
  ))


  const next = () => {
    setScore(previous => {
      previous.push(selected)
      console.log("score array",previous)
      return previous
    })
    setSelected(null)
    setCurrentQ(old => old + 1)
  }

  const previous = () => {
    console.log(currentQ)
    setScore(prev => {
      prev.pop()
      return prev
    })
    setSelected(null)
    setCurrentQ(old => old - 1)
  }

  const total = score.reduce((acc, curr) => acc + curr, 0)
  console.log("total score", total)

  return (
    <div className="grid grid-cols-[10%_80%_10%] items-center gap-4">
      <Button onClick={previous} >previous</Button>
      {questionCards[currentQ]}
      <Button onClick={next} >next</Button>
    </div>
  )
}
