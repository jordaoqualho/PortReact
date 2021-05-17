import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/pages/about";
import Contato from "./components/pages/contato";
import Home from "./components/pages/home";
import Work from "./components/pages/work";
import Skills from "./components/pages/skills";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/skills">
            <Skills></Skills>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <Route path="/contato">
            <Contato></Contato>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
