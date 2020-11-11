import { useState } from "react";
import { Border, ScoreStyle } from "../styles";
import Timer from "./Timer";

import AvocadoHole from "./AvocadoHole";

const GameScreen = () => {
  const [score, setScore] = useState(0);
  const updatedScore = () => {
    setScore(score + 5);
  };

  return (
    <>
      <Timer />
      <ScoreStyle>Score: {score}pts</ScoreStyle>

      <Border>
        <AvocadoHole updatedScore={updatedScore} />
        <AvocadoHole updatedScore={updatedScore} />
        <AvocadoHole updatedScore={updatedScore} />
        <AvocadoHole updatedScore={updatedScore} />
        <AvocadoHole updatedScore={updatedScore} />
      </Border>
    </>
  );
};

export default GameScreen;
