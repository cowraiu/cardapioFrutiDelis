import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import acaicopo from "./assets/pngCopo.png"

import banner from "./assets/acaiMaisUsavel.png"


export const coposAcai = [
  {
    tamanho: "300ml",
    preco: 16.00,
    foto: acaicopo,
    escala: "medio"
  },
  {
    tamanho: "500ml",
    preco: 24.00,
    foto: acaicopo,
    escala: "grande"
  },
  {
    tamanho: "700ml",
    preco: 35.00,
    foto: acaicopo,
    escala: "extra"
  }
];


import pacoca from "./assets/pacoca.png";
import strawberry from "./assets/strawberry.png";
import peanut from "./assets/peanut.png";
import ovomaltine from "./assets/hot-chocolate.png";
import banana from "./assets/banana.png";
import cereja from "./assets/berry.png";
import fini from "./assets/gummy.png";
import confete from "./assets/confete.png";


export const bloco1 = [
  { nome: "Paçoca", valor: 2.00, foto: pacoca },
  { nome: "Morango", valor: 3.00, foto: strawberry },
  { nome: "Amendoim", valor: 2.00, foto: peanut },
  { nome: "Ovomaltine", valor: 3.50, foto: ovomaltine },
  { nome: "Banana", valor: 1.50, foto: banana },
  { nome: "Cereja", valor: 3.00, foto: cereja },
  { nome: "Fini", valor: 3.00, foto: fini },
  { nome: "Confete", valor: 3.50, foto: confete }
];

export const bloco2 = [
  { nome: "Leite em Pó", valor: 2.00, foto: "caminho/para/foto_leite_em_po.jpg" },
  { nome: "Abacaxi", valor: 3.00, foto: "caminho/para/foto_abacaxi.jpg" },
  { nome: "Bis", valor: 2.00, foto: "caminho/para/foto_bis.jpg" },
  { nome: "Flocos", valor: 2.00, foto: "caminho/para/foto_flocos.jpg" },
  { nome: "Kiwi", valor: 3.00, foto: "caminho/para/foto_kiwi.jpg" },
  { nome: "Nutella", valor: 7.00, foto: "caminho/para/foto_nutella.jpg" },
  { nome: "Manga", valor: 3.00, foto: "caminho/para/foto_manga.jpg" },
  { nome: "Farofa Paçoca", valor: 3.00, foto: "caminho/para/foto_farofa_pacoca.jpg" }
];

export const bloco3 = [
  { nome: "Granola", valor: 2.00, foto: "caminho/para/foto_granola.jpg" },
  { nome: "Gotas de Choc.", valor: 3.50, foto: "caminho/para/foto_gotas_choc.jpg" },
  { nome: "Negresco", valor: 3.50, foto: "caminho/para/foto_negresco.jpg" },
  { nome: "Chocoboll", valor: 3.50, foto: "caminho/para/foto_chocoboll.jpg" },
  { nome: "Uva Verde", valor: 3.50, foto: "caminho/para/foto_uva_verde.jpg" },
  { nome: "Leite Cond.", valor: 3.00, foto: "caminho/para/foto_leite_cond.jpg" },
  { nome: "Wafer", valor: 3.00, foto: "caminho/para/foto_wafer.jpg" },
  { nome: "Bombom", valor: 3.00, foto: "caminho/para/foto_bombom.jpg" }
];




function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="scroll-row" style={{ display: "flex" }}>
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
            <div key={index} className={`card ${copo.escala}`}>
              <img src={copo.foto || pngcopo} alt={`Copo de ${copo.tamanho}`} />
              <h3>{copo.tamanho}</h3>
              <p>
                {copo.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
          ))}

        </div>
      </div>

      <div>
        <div className="complemento-card">

          <div className="complementos-card">

            <h1>Complementos</h1>

            {bloco1.map((item, index) => (
              <div className="complemento-item" key={index}>

                <img
                  src={item.foto}
                  alt={item.nome}
                />

                <span>{item.nome}</span>

                <p>
                  {item.valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

    </main>
  )
}

export default App
