import React from "react";
import "./App.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import CourseList from "./features/courses/CourseList";
import ADPLogo2 from "./app/assets/img/ADPLogo2.jpg";
// import Header from './features/components/Header';
// import Footer from './features/components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              src={ADPLogo2}
              alt="adp logo"
            />
          </NavbarBrand>
          <CourseList />
        </Container>
      </Navbar>
      I'm ready to dance!
      {/* <Footer /> */}
    </div>
  );
}

export default App;
