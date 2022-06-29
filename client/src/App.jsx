import { useState, useEffect } from 'react'
import logo from './logo.svg'
import io from 'socket.io-client'
import './App.css'

function App() {
  const [text, setText] = useState("Awaiting things...");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:8080`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    console.log(socket);
  }, [socket]);

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
