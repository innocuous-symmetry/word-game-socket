import { useState, useEffect } from 'react'
import logo from './logo.svg'
import io from 'socket.io-client'
import './App.css'

function App() {
  const [socket, setSocket] = useState(null);
  const [handle, setHandle] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:8080`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    if (!socket || !socket) return;

    socket.on('connect', () => {
      console.log('connected!');
      setHandle(socket.id);
    })
  }, [socket, setSocket]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        { socket ?
        <>
        <p>Socket!</p>
        <p>User ID: {handle || "not found"}</p>
        </>
        : 
        <p>{'No socket :('}</p>
        }
      </header>
    </div>
  )
}

export default App
