import { useState } from 'react';
import './App.css';

import randomColor from 'randomcolor';

export default function App() {
  const [color, setColor] = useState('#000000');
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('red');

  const param = {
    luminosity: luminosity,
    hue: hue,
  };

  function colorHandle() {
    const colorGenerate = randomColor(param);
    setColor(colorGenerate);
  }

  return (
    <div className="App">
      <h1>Welcome to React</h1>

      <input
        type="text"
        placeholder="Hue"
        value={hue}
        onChange={(e) => setHue(e.target.value)}
      />

      <input
        type="text"
        placeholder="luminosity"
        value={luminosity}
        onChange={(e) => setLuminosity(e.target.value)}
      />

      <div
        style={{
          width: '300px',
          height: '100px',
          backgroundColor: color,
        }}>
        Generated Color : {color}
      </div>

      <div stylee={{ color: `${color}` }}>Random color {color} </div>

      <button onClick={colorHandle}>Click Me</button>
    </div>
  );
}
