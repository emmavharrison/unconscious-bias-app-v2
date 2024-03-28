import React from "react";
import { QuizCardV2 } from "./QuizCardV2";
import questionsData from "../questions.json"; 

export function Quiz() {
  console.log("questionsData", questionsData);
  return (
    <div>
      {questionsData.questions.map((question, index) => (
        <QuizCardV2 key={index} question={question} />
      ))}
    </div>
  );
}
