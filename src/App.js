import React from "react";
import "./App.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import ADPLogo2 from "./app/assets/img/ADPLogo2.jpg";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              src={ADPLogo2}
              alt="adp logo"
            />
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm ready to dance!
    </div>
  );
}

export default App;
