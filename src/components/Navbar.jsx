import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar
      className="navBar"
      defaultActiveKey="Home"
      activeKey="home"
      onClick={(eventKey) => eventKey.activeKey}
    >
      <Container>
        <Navbar.Brand className="myLogo">
          EF{" "}
          <div className="helle">
            <br></br>Helle
          </div>
        </Navbar.Brand>
        <Nav className="text-center mt-4 mb-4 ">
          <Nav.Link as={Link} to="/" className="navItem" eventKey="Home">
            {" "}
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="navItem" eventKey="About">
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="navItem"
            to="/Projects"
            eventKey="Projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="navItem"
            to="/Resume"
            eventKey="Resume"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="navItem"
            to="/Contact"
            eventKey="Contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;