import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QuizCardV2({ question }) {
  const { number, scenario, answers, multiSelect } = question;

  const handleOptionSelect = (option) => {
    // Handle option selection here
    console.log(`Selected option for question ${number}: ${option}`);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Question {number}</CardTitle>
          <CardDescription>{scenario}</CardDescription>
        </CardHeader>
        <CardContent>
          {answers.map((answer, index) => (
            <p key={index} onClick={() => handleOptionSelect(answer.option)}>
              {answer.option}
            </p>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
