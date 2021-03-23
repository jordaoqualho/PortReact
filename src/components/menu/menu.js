import React from "react";
import "../../App.css";
import { useHistory } from "react-router-dom";
import casa from "../../img/casa.png";
import about from "../../img/user_gray.png";
import skills from "../../img/settings_gray.png";
import work from "../../img/visibility_gray.png";
import contato from "../../img/letter_gray.png";

export default function Menu() {
  const history = useHistory();

  return (
    <>
      <section className="menu">
        <button
          className="logo flex_center"
          onClick={() => history.push("/home")}
        >
          <h1>J</h1>
          <p>Jordão</p>
        </button>
        <nav className="menu_list flex_center">
          <button className="icone" onClick={() => history.push("/home")}>
            <img src={casa} alt="" />
            <p>HOME</p>
          </button>
          <button className="icone" onClick={() => history.push("/about")}>
            <img src={about} alt="" />
            <p>ABOUT</p>
          </button>
          <button className="icone" onClick={() => history.push("/skills")}>
            <img src={skills} alt="" />
            <p>SKILLS</p>
          </button>
          <button className="icone ic2" onClick={() => history.push("/work")}>
            <img src={work} alt="" />
            <p>PROJETOS</p>
          </button>
          <button
            className="icone ic2"
            onClick={() => history.push("/contato")}
          >
            <img src={contato} alt="" />
            <p>CONTATO</p>
          </button>
        </nav>
        <div className="social_media flex_center">
          <a
            href="https://api.whatsapp.com/send?l=pt_BR&phone=55044998763111"
            target=" "
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/jordaoqualho/?hl=pt-br" target=" ">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jord%C3%A3o-qualho-50557819b/"
            target=" "
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/jordaoqualho" target=" ">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
    </>
  );
}
