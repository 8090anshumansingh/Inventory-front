// import logo from './logo.svg';
// eslint-disable-next-line
import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Invent from "./Invent.js";
import Restock from "./Restock.js";
import Create from "./Create.js";
import Remove from "./Remove.js";
import { Route, Switch } from "react-router-dom";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Info />
        </Route>
        <Route path="/Invent" exact>
          <Invent />
        </Route>
        <Route path="/Info" exact>
          <Info />
        </Route>
        <Route path="/Restock" exact>
          <Restock />
        </Route>
        <Route path="/Create" exact>
          <Create />
        </Route>
        <Route path="/Remove" exact>
          <Remove />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
