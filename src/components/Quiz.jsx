import { QuestionCard } from "./QuestionCard"
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
      {}
      <Button onClick={next} >next</Button>
    </div>
  )
}
