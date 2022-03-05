import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="brand-logo">
                    <img width="100%" src="https://i.ibb.co/hX36CKz/Green-Care.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="nav-a gap-3">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/doctors">Doctors</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about-us">About</NavLink>
                        <NavLink to="/contact-us">Contact</NavLink>
                        <NavLink to="/login">Login/Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;