import React from "react";
import Menu from "../menu/menu";
import "../../App.css";
import marker from "../../img/marker.svg";

export default function Contato() {
  return (
    <>
      <Menu></Menu>
      <section className="contato">
        <div className="contato-banner flex_center_column">
          <h1>Entre em contato!</h1>
          <p>
            Atualmente procurando oportunidades de freelance, especialmente
            projetos inovadores e desafiadores. Caso você tenha alguma pergunta
            em relação ao meu trabalho, fique a vontade para enviar um email!
          </p>
          <form className="forms flex_center_column">
            <div className="row">
              <input
                type="text"
                autoComplete="name"
                className="forms-control"
                placeholder="Nome"
              />
              <input
                type="text"
                autoComplete="email"
                className="forms-control"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className="forms-control"
              placeholder="Assunto"
            />
            <textarea
              className="forms-control"
              name="Mensagem"
              id=""
              cols="30"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
            <button className="stand-btn">Enviar Mensagem</button>
          </form>
        </div>

        <div className="map">
          <div className="anotation">
            <p>Jordão Qualho</p>
            <p>Brasil, Maringá - Paraná</p>
            <p>
              <span>@</span>: jordaoqualho@gmail.com
            </p>
          </div>
          <img src={marker} className="marker" alt="" />
        </div>
      </section>
    </>
  );
}
