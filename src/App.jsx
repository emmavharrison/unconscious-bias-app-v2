import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    <Router>
      <Routes>
        <Route path="/quiz" element={<QuestionCard />} />
      </Routes>
    </Router>
  );
}

export default App;
