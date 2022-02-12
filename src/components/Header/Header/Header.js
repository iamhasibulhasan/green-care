import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="brand-logo">
                    <img width="100%" src="https://i.ibb.co/hX36CKz/Green-Care.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="nav-a gap-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Doctors</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Login/Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;