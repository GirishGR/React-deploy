import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Portfolio.css';

let Navigationbar = () => {

    return (
      
     
          <Navbar collapseOnSelect expand="sm" bg="" variant="dark">
          <Navbar.Brand  className=" NavbarContainer animationleft" href="#">Girish G R</Navbar.Brand>
            <Navbar.Toggle className="NavbarToggler animationright" aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  className="NavbarContainer animationtop" eventKey="1" as={Link}  to="/">Home</NavLink>
                    <NavLink className="NavbarContainer animationtop"  eventKey="2" as={Link} to="#about">About</NavLink>
                    <NavLink className="NavbarContainer animationtop"  eventKey="3" as={Link} to="#education2">Education</NavLink>
                    <NavLink className="NavbarContainer animationtop" eventKey="4" as={Link} to="#skill2">Skills</NavLink>
                    <NavLink className="NavbarContainer animationtop" eventKey="4" as={Link} to="/myworks">MyWorks</NavLink>
                    <NavLink className="NavbarContainer animationtop" eventKey="5" as={Link} to="#ContactMe2">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>

   

   
    );
}

export default Navigationbar;