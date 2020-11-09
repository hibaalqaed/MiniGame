import { Border, Score, Timer } from "../styles";

import AvocadoHole from "./AvocadoHole";

const GameScreen = () => {
  return (
    <>
      <Score>Score: 0pts</Score>
      <Timer>Time left: 0:00 min</Timer>
      <Border>
        <AvocadoHole />
        <AvocadoHole />
        <AvocadoHole />
        <AvocadoHole />
        <AvocadoHole />
      </Border>
    </>
  );
};

export default GameScreen;
