import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "../App.css";
import { Questions } from "../helpers/QuestionBank";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  return (
    <div className="End">
      <h1> Quiz Finished </h1>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button
        onClick={() => {
          setScore(0);
          setGameState("menu");
        }}
      >
        Restart Quiz{" "}
      </button>
    </div>
  );
}

export default EndScreen;
