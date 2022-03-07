import React, { useReducer } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';
import { FaFacebookF, FaGoogle, FaUserAlt, FaKey } from "react-icons/fa";
import useAuth from './../../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {

    // * import Auth method

    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    // console.log('came from', location.state?.from);

    if (user.email) {
        history.push('/')
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

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
                        <div className='social-ico-login'>
                            <div className="login-ico-fb">
                                <FaFacebookF />
                            </div>
                            <div className="social-login-btn">
                                <a href="#">Sign up with Facebook</a>
                            </div>
                        </div>
                        <div className='social-ico-login'>
                            <div className="login-ico-gl">
                                <FaGoogle />
                            </div>
                            <div className="social-login-btn">
                                <a onClick={handleGoogleLogin} href="javascript:void(0);">Sign up with Google</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;