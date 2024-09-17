import { useState } from 'react';
import './App.css';
import randomColor from 'RandomColor';

export default function App() {
  const [color, setColor] = useState('#000000');
  const [luminosity, setLuminosity] = useState('');
  const [hue, setHue] = useState('');

  function colorHandle() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }

  return (
    <div className="App">
      <h1>Welcome to React</h1>

      <input type="text" placeholder="Hue" />

      <input type="text" placeholder="luminosity" />

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
