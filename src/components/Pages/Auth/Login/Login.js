import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Login.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle, FaUserAlt, FaKey } from "react-icons/fa";


const Login = () => {
    return (
        <Container className='login-register'>
            <div className="login-register-div mt-5">
                <div className="site-logo">
                    <img src="https://i.ibb.co/hX36CKz/Green-Care.png" alt="" />
                </div>
                <Form>
                    <Form.Group className="mb-3">
                        <div className="ufield">
                            <div className="uicon">
                                <FaUserAlt />
                            </div>
                            <div className="utext">
                                <Form.Control type="text" placeholder="user@example.com" />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <div className="ufield">
                            <div className="uicon">
                                <FaKey />
                            </div>
                            <div className="utext">
                                <Form.Control type="password" placeholder="password" />
                            </div>
                        </div>
                    </Form.Group>
                    <input className='btn btn-outline-success login-btn' type="submit" value="Login Now" />
                </Form>
                <hr />
                <div className="login-social">
                    <div className="two-social">
                        <p className='social-ico-login'>
                            <div className="login-ico-fb">
                                <FaFacebookF />
                            </div>
                            <div className="social-login-btn">
                                <a href="#">Sign up with Facebook</a>
                            </div>
                        </p>
                        <p className='social-ico-login'>
                            <div className="login-ico-gl">
                                <FaGoogle />
                            </div>
                            <div className="social-login-btn">
                                <a href="#">Sign up with Google</a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;