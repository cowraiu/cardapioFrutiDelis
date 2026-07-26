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


import milkpowder from "./assets/milk-powder.png";
import pineapple from "./assets/pineapple.png";
import dessert from "./assets/dessert.png";
import bubbletea from "./assets/bubble-tea.png";
import kiwi from "./assets/kiwi.png";
import butter from "./assets/butter.png";
import mango from "./assets/mango.png";
import pacocadust from "./assets/pacocaDust.png";

export const bloco2 = [
  { nome: "Leite em Pó", valor: 2.00, foto: milkpowder }, //
  { nome: "Abacaxi", valor: 3.00, foto: pineapple }, //
  { nome: "Bis", valor: 2.00, foto: dessert }, //
  { nome: "Flocos", valor: 2.00, foto: bubbletea }, //
  { nome: "Kiwi", valor: 3.00, foto: kiwi}, //
  { nome: "Nutella", valor: 7.00, foto: butter},//
  { nome: "Manga", valor: 3.00, foto: mango }, 
  { nome: "Farofa Paçoca", valor: 3.00, foto: pacocadust },
];


import granola from "./assets/granola.png";
import gotas from "./assets/sweet.png";
import negresco from "./assets/cafe.png";
import chocoballs from "./assets/chocolate.png";
import grapeGreen from "./assets/grape.png";
import milkcon from "./assets/milk.png";
import wafer from "./assets/wafer.png";
import bombobm from "./assets/candy.png";

export const bloco3 = [
  { nome: "Granola", valor: 2.00, foto: granola },
  { nome: "Gotas de Choc.", valor: 3.50, foto: gotas },
  { nome: "Negresco", valor: 3.50, foto: negresco },
  { nome: "Chocoboll", valor: 3.50, foto: chocoballs },
  { nome: "Uva Verde", valor: 3.50, foto: grapeGreen },
  { nome: "Leite Cond.", valor: 3.00, foto: milkcon },
  { nome: "Wafer", valor: 3.00, foto: wafer },
  { nome: "Bombom", valor: 3.00, foto: bombobm }
];

const adicionaisGratuitos = [
    {
      id: 1,
      nome: "Leite Condensado",
      foto: milkcon, // Altere para a URL/caminho da sua imagem
    },
    {
      id: 2,
      nome: "Wafer",
      foto: wafer,
    },
    {
      id: 3,
      nome: "Banana",
      foto: banana,
    },
    {
      id: 4,
      nome: "Gotas de Chocolate",
      foto: gotas,
    },
    {
      id: 5,
      nome: "Leite em Pó",
      foto: milkpowder,
    },
    {
      id: 6,
      nome: "Paçoca",
      foto: pacoca,
    }
  ];

  const cremes = [
  { nome: "Nutella", valor: "R$ 7,00" },
  { nome: "Creme de Ninho", valor: "R$ 5,00" },
  { nome: "Creme de Pistache", valor: "R$ 7,00" },
  { nome: "Sonho de Valsa", valor: "R$ 5,00" },
  { nome: "Creme de Avelã", valor: "R$ 5,00" },
  { nome: "Creme Raffaelo", valor: "R$ 5,00" },
  { nome: "Cookies Branco", valor: "R$ 5,00" },
  { nome: "Ferrero Rocher", valor: "R$ 6,00" },
];



import star from "./assets/star.png"
import rainbow from "./assets/rainbow.png"
import fruits from "./assets/fruits.png"
import whey from "./assets/whey-protein.png"
import pepper from "./assets/chilli-pepper.png"
import sugarfree from "./assets/sugar-free.png"

const picoles = [
  { 
    nome: "Picolé Especiais Premium", 
    valor: "R$ 10,00", 
    descricao: "Sabores especiais com ingredientes selecionados e cobertura artesanal.",
    foto: star
  },
  { 
    nome: "Picolé Pinta Língua", 
    valor: "R$ 5,00", 
    descricao: "Picolé colorido e divertido que pinta a língua de cores vibrantes.",
    foto: rainbow
  },
  { 
    nome: "Picolé de Fruta", 
    valor: "R$ 3,00", 
    descricao: "Feito com polpa de frutas naturais, refrescante e saboroso.",
    foto: fruits
  },
  { 
    nome: "Picolé de Leite", 
    valor: "R$ 4,00", 
    descricao: "Cremoso e suave, feito com leite de qualidade.",
    foto: milkcon
  },
  { 
    nome: "Picolé Whey", 
    valor: "R$ 14,00", 
    descricao: "Rico em proteína, ideal para quem busca uma opção fitness.",
    foto: whey
  },
  { 
    nome: "Paleta Mexicana", 
    valor: "R$ 12,00", 
    descricao: "Paleta recheada com frutas e cremes, tradição mexicana.",
    foto: pepper
  },
  { 
    nome: "Picolé Zero Açúcar", 
    valor: "R$ 8,00", 
    descricao: "Opção sem açúcar, perfeito para diabéticos e dietas.",
    foto: sugarfree
  },
];
  


function CardComplementos({bloco = []}){

  return(
    <div>

        <div className="complemento-card">

          <div className="complementos-card">

            <h1>Complementos</h1>

            {bloco.map((item, index) => (
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
  );

}

function AdicionaisGratis() {
  return (
    <section className="
      bg-[#21182d]
      rounded-3xl
      px-6 py-4
      overflow-hidden
    ">

      <h2 className="text-center text-orange-500 font-bold text-xl">
        ADICIONAIS GRATUITOS
      </h2>

      <p className="text-center text-white text-sm mb-5">
        VOCÊ PODE ESCOLHER DUAS OPÇÕES
      </p>


      <div className="
        overflow-x-auto
        scrollbar-hide
      ">
        
        <div className="
          flex
          w-max
          min-w-[900px]
        ">

          {
            adicionaisGratuitos.map((item, index) => (

              <div
                key={index}
                className={`
                  w-[150px]
                  flex-shrink-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  py-2

                  ${index !== adicionaisGratuitos.length - 1 
                    ? "border-r border-white/20"
                    : ""}
                `}
              >

                <img
                  src={item.foto}
                  className="
                    w-20
                    h-20
                    object-contain
                    mb-2
                  "
                />


                <span className="
                  text-white
                  text-center
                  text-sm
                  font-semibold
                  whitespace-pre-line
                ">
                  {item.nome}
                </span>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  )
}

function AdcionaisCreme(){
  return (
    <section className="bg-[#22172d] rounded-3xl p-6">

      <h2 className="text-center text-2xl font-bold text-white mb-6">
        ESCOLHA SEUS CREMES FAVORITOS!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cremes.map((creme) => (
          <div
            key={creme.nome}
            className="
              bg-[#2d2140]
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              flex
              justify-between
              items-center
              transition
              hover:border-orange-500
            "
          >
            <h3 className="text-white font-bold text-xl uppercase leading-tight">
              {creme.nome}
            </h3>

            <span className="text-orange-500 font-extrabold text-3xl">
              {creme.valor}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}


function PicolesSabores({bloco = []}){
  return(
    <div className="scroll-row">

      {bloco.map((picole, index) => (
        <div key = {index} className={`card ${"grande"}`}>

          <img src={picole.foto}
              alt={".pequeno"}
              // className="w-4 h-4 block mx-auto"
            />

          <h1>{picole.nome}</h1>

          <p>
            {picole.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>

          <h3 className="text-xl font-semibold text-amber-50">{picole.descricao}</h3>

        </div>
      ))}

    </div>
  );
}


import copoMilk from "./assets/copoMilkShakepng.png"



const milkshakes = [
  {
    nome: "Milkshake 300ml",
    valor: "R$ 16,00",
    foto: copoMilk,
    escala: "medio"
  },
  {
    nome: "Milkshake 500ml",
    valor: "R$ 20,00",
    foto: copoMilk,
    escala: "grande"
  },
  {
    nome: "Milkshake 700ml",
    valor: "R$ 25,00",
    foto: copoMilk,
    escala: "extra"
  }
];

import imagecreme from "./assets/imageCreme.png"

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
        <h3 className="text-5xl  text-amber-600" >COPOS</h3>


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

      <div className="flex flex-col gap-4">

        <div className="scroll-row">

          <CardComplementos bloco = {bloco1}/>

          <CardComplementos bloco = {bloco2}/>

          <CardComplementos bloco = {bloco3}/>

        </div>


        <div className="flex items-center justify-between">

          <AdicionaisGratis/>

        </div>

        <div className="caixa-1">

          <div className="flex justify-center">
            <img src={imagecreme}
              alt={""}
              className="w-64 h-auto block mx-auto"
            />
          </div>

        </div>

        <div>
          <AdcionaisCreme/>
        </div>

        <div  className="mb-10">

            <h3 className="text-5xl border-8 border-amber-100 font-extrabold text-amber-600" >PICOLÉS</h3>

        </div>

      </div>

      <div className="mb-5">

        </div>

        <div>
          <div className="caixa-1">

          <PicolesSabores bloco={picoles}/>

        </div>
      </div>

      <div>
        <h3 className="text-5xl border-8 border-amber-600 font-extrabold text-orange-300" >MILKSHAKE</h3>


        <div className="scroll-row">

          {milkshakes.map((copo, index) => (
            <div key={index} className={`card ${copo.escala}`}>
              <img src={copo.foto || pngcopo} alt={`Copo de ${copo.tamanho}`} />
              <h3>{copo.tamanho}</h3>
              <p>
                {copo.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
          ))}

        </div>
      </div>


    </main>
  )
}

export default App
