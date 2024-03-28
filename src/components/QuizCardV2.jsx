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

export function QuizCardV2({ question, updateSelected }) {
  const { number, scenario, answers, multiSelect } = question;

  const handleOptionSelect = (option) => {
    // Handle option selection here
    console.log(`Selected option for question ${number}: ${option.option}`);
    console.log(option.score)
    updateSelected(option.score)
  };

  return (
    <>
      <Card className="shadow-xl bg-cyan-100 py-4 pattern">
        <CardHeader className="w-[70%] mx-auto">
          <CardDescription>Question {number}</CardDescription>
          <CardTitle>{scenario}</CardTitle>
        </CardHeader>
        <CardContent className="w-[70%] mx-auto">
          <RadioGroup>
          {answers.map((answer, index) => (

            <div key={index} onClick={() => handleOptionSelect(answer)} className="flex space-x-4 p-4 bg-white rounded-md hover:bg-cyan-200 focus-within:bg-cyan-300 shadow">
              <RadioGroupItem value={answer.score} id={index} />
              <Label className="" htmlFor={index}>{answer.option}</Label>
            </div>
          ))}

          </RadioGroup>

        </CardContent>
      </Card>
    </>
  );
}
