import React from 'react';
import { Container } from 'react-bootstrap';
import './OurServices.css';
import useServices from '../../../../hooks/useServices';
import SingleOurService from './../SingleOurService/SingleOurService';

const OurServices = () => {
    const [services] = useServices();
    // console.log(services);
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
                        services.slice(0, 6).map(service => <SingleOurService
                            key={service.id}
                            service={service}

                        ></SingleOurService>)
                    }

                </div>
            </Container>

        </div>
    );
};

export default OurServices;