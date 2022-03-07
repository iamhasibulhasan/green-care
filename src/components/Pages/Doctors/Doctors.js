import React from 'react';
import './Doctors.css';
import { Container } from 'react-bootstrap';
import useDoctors from './../../../hooks/useDoctors';

const Doctors = () => {
    const [doctors] = useDoctors();
    // console.log(doctors);
    return (
        <Container className='my-5'>
            <div className="doctors-info">
                {
                    doctors.map(doctor =>
                        <div className="card">
                            <img className="card-img-top" src={doctor.photo} alt="Card image cap" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{doctor.name}</h5>
                                <p className="card-text"><strong>Address:</strong> {doctor.address}<strong> Phone:</strong> {doctor.phone}. </p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default Doctors;