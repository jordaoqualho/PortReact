import React from "react";
import Menu from "../menu/menu";
import "../../App.css";

export default function Home() {
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
      <section className="hero">
        <div className="banner flex_center">
          <h1>
            Oi, <br />
            Eu sou <span>J</span>ordão, <br />
            Um Desenvolvedor<span>.</span>
          </h1>
          <p>Web / Mobile Front End Dev</p>
          <a href="https://api.whatsapp.com/send?l=pt_BR&phone=55044998763111">
            <button className="stand-btn">Veja meu trabalho!</button>
          </a>
        </div>
        <div className="big-jay">
          <span data-tilt-reset="false" data-tilt-full-page-listening>
            J
          </span>
        </div>
      </section>
    </>
  );
}


