import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import slide1 from './../../../../media/Slider/home-slider1.png';
import slide2 from './../../../../media/Slider/home-slider2.png';
import slide3 from './../../../../media/Slider/home-slider3.png';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption className='slider-caption'>
                    <h3>Get Emergency Care 24/7</h3>
                    <p>We are always at your side. We are 24 hours available for you in emergency situation.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption className='slider-caption'>
                    <h3>Hope Of Healthy Life</h3>
                    <p>We are always at your side. We are 24 hours avail- able for you in emergency situation.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption className='slider-caption'>
                    <h3>Your Good Health is Our Responsibility</h3>
                    <p>
                        PGet your appointment through online and remain safe at your home. Because your safety is our first priority.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;