import React from 'react';
import OurDoctors from '../OurDoctors/OurDoctors';
import OurServices from '../OurSevices/OurServices';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OurServices></OurServices>
            <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;