import { useState, useEffect } from "react";
import { AvoHole, AvoGuac } from "../styles";
import guac from "../images/guac.png";

//set status = 1 >> show nothing
//set status = 2 >> show avocados
//set status = 3 >> show guacamole

const AvocadoHole = (props) => {
  const [status, setStatus] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber > 8) setStatus(2);
      else setStatus(1);
    }, 800);
    return () => clearInterval(timer);
  });

  const showUpdates = () => {
    if (status === 2) {
      setStatus(3);
      props.updatedScore();
    }
  };

  const getView = () => {
    if (status === 3) return <img src={guac} />;
    else if (status === 2) return "🥑";
    else return "";
  };

  return (
    <AvoHole onClick={showUpdates}>
      <AvoGuac> {getView()} </AvoGuac>
    </AvoHole>
  );
};

export default AvocadoHole;
