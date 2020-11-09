import { useState } from "react";
import { AvoHole } from "../styles";

const AvocadoHole = () => {
  const [avocado, setAvocado] = useState(false);

  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 8) setAvocado(true);
    else setAvocado(false);
  }, 1000);

  return <AvoHole> {avocado ? "🥑" : ""} </AvoHole>;
};

export default AvocadoHole;
