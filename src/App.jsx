import { useState } from "react";

import "./App.css";
import { QuestionCard } from "./components/QuestionCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <>
      <QuestionCard />
    </>
  );
}

export default App;
