import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


function NavigationBar() {
  
  return (
      <Navbar className="navBar"  >
        <Container>
          <Navbar.Brand as= {Link} className="myLogo" to="/">EF <div className="helle"><br></br>Helle</div></Navbar.Brand>
          <Nav className="text-center mt-4 mb-4 " >
              <Nav.Link  as={Link}  className="navItem" to="/About">About</Nav.Link>
              <Nav.Link  as={Link} className= "navItem" to="/Projects">Projects</Nav.Link>
              <Nav.Link  as={Link} className= "navItem" to="/Resume">Resume</Nav.Link>
              <Nav.Link as={Link} className= "navItem" to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;