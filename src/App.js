import GameScreen from "./components/GameScreen";
import { AppContainer, Title, Description, Motivation } from "./styles";

function App() {
  return (
    <AppContainer>
      <Title>Guac-A-Mole</Title>
      <Description>REACH 260 POINTS</Description>
      <Motivation>LET'S GO!!!</Motivation>
      <GameScreen />
    </AppContainer>
  );
}

export default App;
