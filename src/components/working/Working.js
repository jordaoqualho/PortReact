import React from "react";
import dev from "../../img/dev.png";
import "./main.css";

export const Working = () => {
  return (
    <>
      <div className="container">
        <div>
          <img src={dev} />
          <h1 className="wk-title">Página em desenvolvimento</h1>
        </div>
      </div>
    </>
  );
};
