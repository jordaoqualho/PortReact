import React from "react";
import Menu from "../menu/menu";
import "../../App.css";

export default function About() {
  return (
    <>
      <Menu></Menu>
      <span className="tags top_tag">
        &lt;html&gt; <br />
        &nbsp;&nbsp;&nbsp;&lt;body&gt;
      </span>
      <span className="tags bottom_tag">
        &nbsp;&nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
      </span>
      <div className="banner t_about flex_center about-container">
        <h1>
          <span>Quem sou eu?</span>
        </h1>
        <p>
          Eu sou um desenvolvedor Front-End que atualmente mora em maringá. Sou
          apaixonado por criar animações, designs únicos e uma experiência
          incrível em cada projeto.
        </p>
        <p>
          Uma das coisas que mais me impulsiona a continuar nessa carreia, é o
          sentimento único apos criar algo incrível ou resolver um problema
          impossível. Outras das minhas paixões são, tocar violino, xadrez,
          escrever músicas e ler livros interessantes sobre filosofia/religião.
        </p>
        <p>
          Atualmente interessado em todo tipo de projeto Web ou Mobile e
          disposto a se aventurar na descoberta de novas linguagens!
        </p>
        <a href="./contato.html">Vamos trocar uma ideia!</a>
      </div>
    </>
  );
}
