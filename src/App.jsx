import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import acaicopo from "./assets/pngCopo.png"

import banner from "./assets/acaiMaisUsavel.png"


export const coposAcai = [
  {
    tamanho: "240ml",
    preco: 13.00,
    foto: acaicopo
  },
  {
    tamanho: "300ml",
    preco: 16.00,
    foto: acaicopo
  },
  {
    tamanho: "500ml",
    preco: 24.00,
    foto: acaicopo
  },
  {
    tamanho: "700ml",
    preco: 35.00,
    foto: acaicopo
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="scroll-row" style={{display:"flex"}}>
        <img
        src={banner}
        alt="acai"
        className="w-270 h-130 rounded-xl"
        />
      </div>

      <div>
        <h1>Copos</h1>
        <div className="scroll-row">

          {coposAcai.map((copo, index) => (
            <div key={index} className="card">
              <img src={copo.foto || pngcopo} alt={`Copo de ${copo.tamanho}`} />
              <h3>{copo.tamanho}</h3>
              <p>
                {copo.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
          ))}

        </div>
      </div>
    </main>
  )
}

export default App
