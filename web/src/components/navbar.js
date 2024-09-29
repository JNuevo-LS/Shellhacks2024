import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import {Route, Link} from 'react-router-dom'

export const Bar = (props) => {
  return (
    <div>
    <Container>
        <Navbar variant = "dark" expand="lg" className="navbar navbar-expand-md navbar-custom">
            <Container>
            <Navbar.Brand as={Link} to="/">Captain One</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/quests">Quests</Nav.Link>
                <Nav.Link href="#link">Locker</Nav.Link>
                <Nav.Link as={Link} to="/bonus">Bonuses</Nav.Link>
                <Nav.Link href="#link">Spending</Nav.Link>
                <NavDropdown title="Help" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
    </div>
  );
};
