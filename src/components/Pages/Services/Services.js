import React from 'react';
import { Container } from 'react-bootstrap';
import './Services.css';
import useServices from './../../../hooks/useServices';
import SingleOurService from './../Home/SingleOurService/SingleOurService';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='our-services py-5'>
            <Container>
                <div className='section-title text-center'>
                    <span>Our Services</span>
                    <h2>Our Healthcare Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='services-container'>
                    {
                        services.map(service => <SingleOurService
                            key={service.id}
                            service={service}

                        ></SingleOurService>)
                    }

                </div>
            </Container>

        </div>
    );
};

export default Services;