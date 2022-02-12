import React from 'react';
import { Container } from 'react-bootstrap';
import './TopHeader.css';
import { BsFillEnvelopeFill, BsFillClockFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className='top-header'>
            <Container className='top-header-container'>
                <div className='top-first d-lg-flex gap-5'>
                    <div className='top-email gap-3'>
                        <BsFillEnvelopeFill />
                        <span>greencare@gmail.com</span>
                    </div>
                    <div className='top-time gap-3'>
                        <BsFillClockFill />
                        <span>Mon - Sat: 8.00 am - 7.00 pm</span>
                    </div>
                </div>
                <div className='top-social gap-4'>
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaYoutube /></span>
                    <span><FaGoogle /></span>
                </div>
            </Container >
        </div >
    );
};

export default TopHeader;