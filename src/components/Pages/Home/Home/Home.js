import React from 'react';
import FunFacts from '../FunFacts/FunFacts';
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
            <FunFacts></FunFacts>
        </div>
    );
};

export default Home;