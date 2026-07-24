import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import acaicopo from "./assets/acaiPhoto.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="flex justify-center">
        <img
        src={acaicopo}
        alt="acai"
        className="w-270 h-110 rounded-x1"
        />
      </div>
      <h1></h1>
    </main>
  )
}

export default App
