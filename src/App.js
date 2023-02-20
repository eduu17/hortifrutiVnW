import React, { Component } from "react";
import alface from "./img/alface.png";
import beterraba from "./img/beterraba.png";
import cenoura from "./img/cenoura.png";
import cereja from "./img/cereja.png";
import laranja from "./img/laranja.png";
import limao from "./img/limao.png";
import manga from "./img/manga.png";
import tomate from "./img/tomate.png";
import car from "./img/ShoppingCart.svg";
import circle1 from"./img/PlusCircle.svg";
import circle2 from "./img/MinusCircle.svg";
import "./App.css";

class Main extends Component {
  state = {
    frutas: [
      {
        imagem: `${alface}`,
        titulo: "Alface",
      },
      {
        imagem: `${beterraba}`,
        titulo: "Beterraba",
      },
      {
        imagem: `${cenoura}`,
        titulo: "Cenoura",
      },
      {
        imagem: `${cereja}`,
        titulo: "Cereja",
      },
      {
        imagem: `${laranja}`,
        titulo: "Laranja",
      },
      {
        imagem: `${limao}`,
        titulo: "Limao",
      },
      {
        imagem: `${manga}`,
        titulo: "Manga",
      },
      {
        imagem: `${tomate}`,
        titulo: "Tomate",
      },
    ],
  };

  render() {
    return (
      <main>
        <section className="Top">
          <h1>Hortifruti</h1>
          <h2>VnW</h2>
        </section>
        <section className="mother">
          <h2>Nossos produtos</h2>
          <div className="container">
            <section className="map">
              {this.state.frutas.map((item) => (
                <div className="box">
                  <img src={item.imagem} alt={item.titulo} />
                </div>
              ))}
            </section>
            <section className="Phone">
              <div className="cart">
              <img src={car} alt="Carrinho de supermercado"/>
              <p>Arraste o seu produto aqui para colocar no carrinho</p>
              </div>
              <div className="circle">
                <img src={circle1} alt="Adicionar"/>
                <img src={circle2} alt="Excluir"/>
              </div>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
