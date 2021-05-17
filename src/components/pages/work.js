import React, { useEffect } from "react";
import Menu from "../menu/menu";
import { Working } from "../working/Working";
import "../../App.css";

export default function Work() {
  useEffect(() => {
    const transition_el = document.querySelector(".transition");

    setTimeout(() => {
      transition_el.classList.remove("is-active");
    }, 500);
  }, []);
  return (
    <>
      <div className="transition transition-2 is-active"></div>

      <Menu></Menu>
      <Working></Working>
    </>
  );
}
