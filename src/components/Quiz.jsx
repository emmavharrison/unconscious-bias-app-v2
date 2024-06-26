import { QuizCardV2 } from "./QuizCardV2";
import questionsData from "../questions.json";
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Link } from "react-router-dom";

export const getScore = () => {};

export const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState([])
  const [selected, setSelected] = useState(null)
  const [progress, setProgress] = useState(0)

  const updateSelected = (score) => {
    setSelected(score);
  };

  const questionCards = questionsData.questions.map((question, index) => (
    <QuizCardV2
      key={index}
      question={question}
      updateSelected={updateSelected}
      setScore={setScore}
    />
  ));

  const next = () => {
    setScore(previous => {
      previous.push(selected)
      console.log("score array",previous)
      return previous
    })
    setSelected(null)
    let nextQ = currentQ + 1
    setCurrentQ(nextQ)
    setProgress(100 * (nextQ / questionCards.length))
  }

  const previous = () => {
    console.log(currentQ)
    setScore(prev => {
      prev.pop()
      return prev
    })
    setSelected(null)
    let nextQ = currentQ -1
    setCurrentQ(nextQ)
    setProgress(100 * (nextQ / questionCards.length))
  }

  const totalScore = score.reduce((acc, curr) => acc + curr, 0);

  let toValue;

  if (totalScore >= 0 && totalScore <= 4) {
    toValue = "/resultsBad";
  } else if (totalScore >= 5 && totalScore <= 10) {
    toValue = "/resultsNeutral";
  } else if (totalScore >= 11 && totalScore <= 16) {
    toValue = "/resultsGood";
  } else {
    // Handle out of range values, if needed
    toValue = "/results"; // Default to "/results" if totalScore is out of expected range
  }

  return (
    <div className="grid grid-cols-[10%_80%_10%] items-center gap-4 max-w-4xl">
      <Button onClick={previous}>Previous</Button>
      <div>
        <Progress value={progress} className="bg-cyan-200" />
        {questionCards[currentQ]}
      </div>
      {currentQ < questionCards.length - 1 ? (
        <Button onClick={next}>Next</Button>
      ) : (
        <Button asChild>
          <Link to={toValue}> Submit </Link>
        </Button>
      )}
    </div>
  );
};
