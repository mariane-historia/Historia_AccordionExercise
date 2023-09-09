//Apps.js

import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "./App.css";
import { Accordion, Button, Card } from "react-bootstrap";

const App = () => {
  const [question, setQuestions] = useState(data);

  const mapQuestions = () => {
    return question.map((question) => (
      <Question key={question.id} {...question} />
    ));
  };

  return (
    <main>
      <div className="container">
        <h3 style={{ textAlign: "left" }}>Questions And Answers About Login</h3>
        <section className="info">
          <Accordion defaultActiveKey="0">{mapQuestions()}</Accordion>
        </section>
      </div>
    </main>
  );
};

export default App;
