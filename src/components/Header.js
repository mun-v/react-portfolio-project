import { Navbar, NavbarBrand } from "reactstrap";
import ADPLogo2 from "../app/assets/img/ADPLogo2.jpg";

const Header = () => {

  return (
    <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand href="/">
          <img src={ADPLogo2} alt="adp logo" />
        </NavbarBrand>
    </Navbar>
  );
};

export default Header;
