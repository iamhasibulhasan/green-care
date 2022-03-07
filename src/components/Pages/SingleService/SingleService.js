import React from 'react';
import { Container } from 'react-bootstrap';
import './SingleService.css';
import { useParams } from 'react-router-dom';
import useServices from './../../../hooks/useServices';
import { useState } from 'react';
import { useEffect } from 'react';
import useSingleService from './../../../hooks/useSingleService';


const SingleService = () => {
    const id = useParams().id;
    const [services] = useSingleService(id);

    console.log(services);

    return (
        <div>
            {
                services.filter(service => service.id == id).map(s =>

                    <Container>
                        <div className="single-service my-5">
                <div className="single-half">
                                <div className="service-photo mb-4">
                                    <img src={s.img} width="80%" alt="" />
                                </div>
                                <h2 className="service-title">{s.service_title}</h2>
                                <p className="service-description">
                                    {s.service_description}
                                </p>
                            </div>
                            <div className="single-half">
                                <p className="service-code">Service Code : {s.service_code}</p>
                                <h3 className="service-doctor">Doctor : {s.doctor}</h3>
                            </div>
                        </div>
            </Container>
                )
            }
        </div>
    );
};

export default SingleService;