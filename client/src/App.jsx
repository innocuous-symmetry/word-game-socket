import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [text, setText] = useState("Awaiting things...");

  const getThings = async () => {
    const response = await fetch("http://localhost:8080");
    const json = await response.json();
    const value = json.text;
    
    setText(text == value ? "Things are undone." : value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <button onClick={getThings}>Things?</button>
        <p>{text}</p>
      </header>
    </div>
  )
}

export default App
