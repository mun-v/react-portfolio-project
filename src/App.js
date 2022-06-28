import React from "react";
import "./App.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import CourseDirectoryPage from "./pages/CourseDirectoryPage";
import ADPLogo2 from "./app/assets//img/ADPLogo2.jpg";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              src={ADPLogo2}
              alt="adp logo"
            />
          </NavbarBrand>
          <CourseDirectoryPage />
        </Container>
      </Navbar>
      I'm ready to dance!
      <Footer />
    </div>
  );
}

export default App;
