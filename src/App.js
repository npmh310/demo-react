import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import React, { Component } from "react";
import Menu from "./components/MenuComponent";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
