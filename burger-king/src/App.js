import React, { Component } from "react";
import "./App.css";
import Burger from "./components/Burger/Burger";
import Order from "./components/Order/Order";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Modal from "./components/ModalWin/ModalWin";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/burger" component={Burger} />
          <Route exact path="/" component={Modal} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
