import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizJava = () => {
  const questions = [
    {
      id: 1,
      questions: "Java?",
      options: ["", "", ""],
      correctAnswer: "",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const AnswerButtonClick = (setCurrentQuestion = useState(0));
    if(selectOption === questions)
};
