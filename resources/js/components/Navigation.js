import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {

    const user = false;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="mb-4">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>
                            <i className="fas fa-home"></i> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/watch'>
                            <i className="fas fa-play-circle"></i> Watch
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/'>Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/'>Another action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user
                                ?
                                <NavDropdown title={<><i className="fas fa-user-circle"></i> User</>} id="collasible-nav-dropdown" align="end">
                                    <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/'>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <NavDropdown title="Account" id="collasible-nav-dropdown" align="end">
                                    <NavDropdown.Item as={Link} to='/login'>Sign in</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/register'>Sign up</NavDropdown.Item>
                                </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
