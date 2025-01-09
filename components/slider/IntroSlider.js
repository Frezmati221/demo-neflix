import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IntroContent from "../elements/IntroContent";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = ({handleOpen}) => {
    const data = [
        {
            img: "23.jpg",
            avatar: "1.jpg",
            title: "The Sandbox",
            author: "Sound Box",
        },
        {
            img: "24.jpg",
            avatar: "2.jpg",
            title: "The Sandbox",
            author: "Sound Box",
        },
        {
            img: "25.jpg",
            avatar: "3.jpg",
            title: "The Sandbox",
            author: "Sound Box",
        },
        {
            img: "26.jpg",
            avatar: "4.jpg",
            title: "The Sandbox",
            author: "Sound Box",
        },
    ];

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                
                navigation={{
                    prevEl: ".intro_prev",
                    nextEl: ".intro_next",
                }}
                className="intro-slider"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="intro-slider py-5">
                                    <div className="slider-item">
                                        <img
                                            src={`/images/items/${item.img}`}
                                            alt=""
                                            className="img-fluid"
                                        />
                                        {/* <div className="slider-item-avatar">
                                            <img
                                                src={`/images/avatar/${item.avatar}`}
                                                alt=""
                                            />
                                            <div>
                                                <h5>{item.title}</h5>
                                                <p>{item.author}</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-12">
                                <IntroContent handleOpen={handleOpen}/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="arrows">
                    <span className="intro_prev">
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="intro_next">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </div>
            </Swiper>
        </>
    );
};

export default IntroSlider;
