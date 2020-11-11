import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Tahoma;
`;

export const Description = styled.h2`
  text-align: center;
  text-decoration: underline;
  font-family: Tahoma;
  color: green;
`;

export const Motivation = styled.h1`
  text-align: center;
  font-family: Tahoma;
  color: green;
`;

export const ScoreStyle = styled.h4`
  text-align: center;
  font-family: Tahoma;
`;

export const TimerStyle = styled.h4`
  text-align: center;
  font-family: Tahoma;
`;

export const Border = styled.div`
  width: 800px;
  height: 400px;
  border: 10px solid black;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const AvoHole = styled.div`
  width: 30%;
  height: 45%;
  border-radius: 100%;
  background-color: lightgreen;
  border: 5px solid green;
  margin: 1%;
  text-align: center;
  font-size: 100px;
  :hover {
    background-color: green;
    border: 5px solid lightgreen;
  }
`;

export const AvoGuac = styled.div`
  padding-top: 25px;
`;
