import React from 'react';
import { FaBacterium, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleOurService = (props) => {
    const { service } = props;
    const { id, service_title, service_description } = service;
    return (
        <div className="service">
            <div className="service-icon">
                <FaBacterium />
            </div>
            <div className="service-info">
                <h3>{service_title}</h3>
                <p>{service_description.substring(0, 150) + "..."}</p>
                <Link to={`/service/${id}`}>READ MORE <FaArrowRight /></Link>
            </div>
        </div>
    );
};

export default SingleOurService;