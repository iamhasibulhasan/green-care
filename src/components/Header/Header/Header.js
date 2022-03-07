import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from './../../../hooks/useAuth';
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useAuth();
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
                        <NavLink to="/about-us">About us</NavLink>

                        <Navbar.Text>
                            <div className="login-info">
                                <img className='login-photo' src={user.photoURL} alt="" />
                                <span>{user.displayName ? user.displayName : user.email}</span>
                            </div>
                        </Navbar.Text>
                        {
                            user.email ?
                                <a className='logout-btn' onClick={logOut} href="javascript:void(0);"><FaSignOutAlt /></a> :
                                <NavLink to="/login">Login/Register</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;