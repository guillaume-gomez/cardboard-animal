import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeJsRenderer from "./components/ThreeJsRenderer";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{width: "100%"}}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <div className="card">
          <div style={{border: "2px solid blue"}}>
            <ThreeJsRenderer />
          </div>
        </div>
      </div>
  );
}

export default App
