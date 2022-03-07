import React from 'react';
import './OurDoctors.css';
import { Container, Card, Button } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";

const OurDoctors = () => {

    return (
        <Container className='pb-5'>
            <div className='section-title text-center'>
                <span>Doctors</span>
                <h2>Meet Our Qualified Doctors</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="single-doctor-box">
                        <div className="doctor-image">
                            <img src="https://templates.envytheme.com/fovia/default/assets/img/doctor/1.jpg" alt="" />
                        </div>

                        <div className="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul className="social">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-doctor-box">
                        <div className="doctor-image">
                            <img src="https://templates.envytheme.com/fovia/default/assets/img/doctor/2.jpg" alt="" />
                        </div>

                        <div className="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul className="social">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-doctor-box">
                        <div className="doctor-image">
                            <img src="https://templates.envytheme.com/fovia/default/assets/img/doctor/3.jpg" alt="" />
                        </div>

                        <div className="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul className="social">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-doctor-box">
                        <div className="doctor-image">
                            <img src="https://templates.envytheme.com/fovia/default/assets/img/doctor/4.jpg" alt="" />
                        </div>

                        <div className="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul className="social">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-doctor-box">
                        <div className="doctor-image">
                            <img src="https://templates.envytheme.com/fovia/default/assets/img/doctor/5.jpg" alt="" />
                        </div>

                        <div className="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul className="social">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-doctor-box">
                        <div className="doctor-image">
                            <img src="https://templates.envytheme.com/fovia/default/assets/img/doctor/6.jpg" alt="" />
                        </div>

                        <div className="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul className="social">
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container >
    );
};

export default OurDoctors;