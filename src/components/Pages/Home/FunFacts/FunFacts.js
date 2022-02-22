import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FunFacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faLightbulb, faAward, faTrophy } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const FunFacts = () => {
    return (
        <div className='fun-facts-area mb-5'>
            <Container className='py-5'>
                <Row>
                    <Col sm={3} lg={3} md={3} xs={6}>
                        <div className="single-fun-facts">
                            <div className="fun-fact-icon">
                                <FontAwesomeIcon icon={faUserDoctor} />
                            </div>
                            <h3><CountUp end={540} delay={5} /> <span className='optional-icon'>+</span></h3>
                            <p>Expert Doctors</p>
                        </div>
                    </Col>
                    <Col sm={3} lg={3} md={3} xs={6}>
                        <div className="single-fun-facts">
                            <div className="fun-fact-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                            <h3><CountUp end={340} delay={5} /> <span className='optional-icon'>K</span></h3>
                            <p>Problem Solve</p>
                        </div>
                    </Col>
                    <Col sm={3} lg={3} md={3} xs={6}>
                        <div className="single-fun-facts">
                            <div className="fun-fact-icon">
                                <FontAwesomeIcon icon={faAward} />
                            </div>
                            <h3><CountUp end={1540} delay={5} /> <span className='optional-icon'>+</span></h3>
                            <p>Award Winning</p>
                        </div>
                    </Col>
                    <Col sm={3} lg={3} md={3} xs={6}>
                        <div className="single-fun-facts">
                            <div className="fun-fact-icon">
                                <FontAwesomeIcon icon={faTrophy} />
                            </div>
                            <h3><CountUp end={1540} delay={5} /> <span className='optional-icon'>K</span></h3>
                            <p>Experiences</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FunFacts;