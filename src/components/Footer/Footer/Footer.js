import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <Container className='footer-container'>
                <div className="footer-col py-4">
                    <div className="footer-1">
                        <img src="https://i.ibb.co/cTrcXDr/Green-Care-light.png" alt="" />
                        <p>GreenCare.com.bd is a product of Care Limited. GreenCare.com.bd is intended to be the most comprehensive...</p>
                        <div className="footer-social">
                            <p><FaFacebookF /></p>
                            <p><FaTwitter /></p>
                            <p><FaYoutube /></p>
                            <p><FaGoogle /></p>
                        </div>
                    </div>
                    <div className="footer-2">
                        <h2>Departments</h2>
                        <div className="links">
                            <ul>
                                <li>Surgery and Radiology</li>
                                <li>Departments</li>
                                <li>Family</li>
                                <li>Our Doctors</li>
                                <li>Woman's Health</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-3">
                        <h2>Links</h2>
                        <div className="links">
                            <ul>
                                <li>Surgery and Radiology</li>
                                <li>Departments</li>
                                <li>Family</li>
                                <li>Our Doctors</li>
                                <li>Woman's Health</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-4">
                        <h2>Opening Hours</h2>
                        <div className="opening-hours">
                            <ul>
                                <li>
                                    MON - TUES
                                    <span>9.00AM - 17.00PM</span>
                                </li>
                                <li>
                                    WEDNESDAY
                                    <span>9.00AM - 17.00PM</span>
                                </li>
                                <li>
                                    THURSDAY
                                    <span>9.00AM - 17.00PM</span>
                                </li>
                                <li>
                                    FRIDAY
                                    <span>9.00AM - 17.00PM</span>
                                </li>
                                <li>
                                    SATURDAY
                                    <span>CLOSED</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copy-right text-center py-4">
                    &copy;  2022 Green Care. Design & Developed by Hasibul Hasan
                </div>
            </Container>
        </div>
    );
};

export default Footer;