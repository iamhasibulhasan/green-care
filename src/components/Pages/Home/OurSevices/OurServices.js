import React from 'react';
import { Container } from 'react-bootstrap';
import './OurServices.css';
import { FaBacterium, FaArrowRight } from "react-icons/fa";

const OurServices = () => {
    return (
        <div className='our-services py-5'>

            <Container>
                <div className='section-title text-center'>
                    <span>Our Services</span>
                    <h2>Our Healthcare Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='services-container'>
                    <div className="service">
                        <div className="service-icon">
                            <FaBacterium />
                        </div>
                        <div className="service-info">
                            <h3>Cancer Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#">READ MORE <FaArrowRight /></a>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaBacterium />
                        </div>
                        <div className="service-info">
                            <h3>Cancer Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#">READ MORE <FaArrowRight /></a>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaBacterium />
                        </div>
                        <div className="service-info">
                            <h3>Cancer Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#">READ MORE <FaArrowRight /></a>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaBacterium />
                        </div>
                        <div className="service-info">
                            <h3>Cancer Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#">READ MORE <FaArrowRight /></a>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaBacterium />
                        </div>
                        <div className="service-info">
                            <h3>Cancer Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#">READ MORE <FaArrowRight /></a>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaBacterium />
                        </div>
                        <div className="service-info">
                            <h3>Cancer Services</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <a href="#">READ MORE <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default OurServices;