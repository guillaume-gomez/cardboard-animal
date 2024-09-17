import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThreeJsRenderer from "./components/ThreeJsRenderer";

function App() {
  const [selectAnimal, setSelectedAnimal] = useState<string>("girafe");

  return (
      <div style={{width: "100%"}}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <select
          value={selectAnimal}
          onChange={(e) => setSelectedAnimal(e.target.value)}
        >
          <option value="girafe">Girafe</option>
        </select>
        <div style={{border: "2px solid blue"}}>
          <ThreeJsRenderer />
        </div>
      </div>
  );
}

export default App
