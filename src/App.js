//  Importing necessary modules and state

import { useState } from 'react';
import randomColor from 'randomcolor';
import styled from 'styled-components';

// Styling for the app

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
  text-transform: capitalize;
  margin-bottom: 2em;
  margin-top: -1em;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const Button = styled.button`
  margin-top: 2em;
  padding: 1em 2em;
  background-color: palevioletred;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
`;

const Input = styled.input`
  padding: 0.5em;
  font-size: 1em;

  transition: background-color 0.3s ease-in-out;
  &:focus {
    background-color: lightpink;
  }
  &:hover {
    background-color: lightcoral;
  }
  margin-left: 1em;
`;

// const Card = styled.div`
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.1, 0.2);
//   padding: 20px;
//   margin-top: 2em;
//   width: 400px;
//   height: 200px;
// `;
const CardTitle = styled.h2`
  font-size: 1.9em;
  margin-bottom: 10px;

  text-transform: capitalize;
  margin-top: 2.5em;
  font-weight: bold;

  text-align: center;
`;

export default function App() {
  // Using React Hooks to manage the state of the application
  const [color, setColor] = useState('#000000');
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');

  // Setting up parameters for randomColor function

  const param = {
    luminosity: luminosity,
    hue: hue,
  };
  // Function to generate random color with user input hue and luminosity
  function colorHandle() {
    const colorGenerate = randomColor(param);
    setColor(colorGenerate);
  }

  return (
    <Wrapper className="App">
      <Title>random color generator web application</Title>

      <Input
        type="text"
        placeholder="Hue"
        value={hue}
        onChange={(e) => setHue(e.target.value)}
      />

      <Input
        type="text"
        placeholder="luminosity"
        value={luminosity}
        onChange={(e) => setLuminosity(e.target.value)}
      />

      <div style={{ background: color }}>
        <CardTitle>Generated Color : {color}</CardTitle>
      </div>

      <Button onClick={colorHandle}>Generate</Button>
    </Wrapper>
  );
}
