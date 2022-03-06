import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleService from './../../../hooks/useSingleService';


const SingleService = () => {
    // const id = useParams().id;
    // const [service] = useSingleService(id);
    // console.log(service);
    return (
        <div>
            <Container>
                <div className="single-half">

                </div>
                <div className="single-half"></div>
            </Container>
        </div>
    );
};

export default SingleService;