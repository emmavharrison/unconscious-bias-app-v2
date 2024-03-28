import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function QuizCardV2({ question }) {
  const { number, scenario, answers, multiSelect } = question;

  const handleOptionSelect = (option) => {
    // Handle option selection here
    console.log(`Selected option for question ${number}: ${option.option}`);
    console.log(option.score)
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Question {number}</CardTitle>
          <CardDescription>{scenario}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="comfortable">
          {answers.map((answer, index) => (

            <div key={index} onClick={() => handleOptionSelect(answer)} className="flex space-x-2">
              <RadioGroupItem value={answer.score} id={index} />
              <Label className="flex justify-center" htmlFor={index}>{answer.option}</Label>
            </div>
          ))}

          </RadioGroup>

        </CardContent>
      </Card>
    </>
  );
}
