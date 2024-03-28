import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Quiz } from "./components/Quiz";
import { LandingPage } from "./components/LandingPage";
import { ResultsPageGood } from "./components/ResultsPageGood";
import { ResultsPageBad } from "./components/ResultsPageBad";
import { ResultsPageNeutral } from "./components/ResultsPageNeutral";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resultsGood" element={<ResultsPageGood />} />
        <Route path="/resultsBad" element={<ResultsPageBad />} />
        <Route path="/resultsNeutral" element={<ResultsPageNeutral />} />
      </Routes>
    </Router>
  );
}

export default App;
