import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './AboutUs.css';
import banner from './../../../media/medicine-banner.png';

const AboutUs = () => {
    return (
        <Container>
            <div className="banner my-5">
                <img src={banner} alt="" />
            </div>
            <div className="contact-us">
                <div className="contact-info">
                    <h2 className='mb-3'>Contact Us</h2>
                    <Form>
                        <div className="form-group mb-5 form-name">
                            <label htmlFor="">First Name</label>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="First name" className="form-control" />
                            <input type="text" placeholder="Last name" className="form-control ml-2" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="">Email</label>
                            <input placeholder="Your email" type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="20" rows="5" className='form-control'></textarea>
                        </div>
                        <div className="contact-us-btn mb-5">
                            <Button variant='success'>Send Message</Button>
                        </div>
                    </Form>
                </div>
                <div className="address">
                    <div class="footer-1">
                        <img className='mb-4' src="https://i.ibb.co/hX36CKz/Green-Care.png" alt="" />
                        <p>GreenCare.com.bd is a product of Care Limited. GreenCare.com.bd is intended to be the most comprehensive...</p></div>
                    <p>Address: Nikunja-2, Khilkhet, Dhaka-1229</p>
                    <p>Mobile: +8807147979703</p>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;