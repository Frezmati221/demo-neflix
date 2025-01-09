import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TrendingSlider = () => {

    const data = [
        {
            img: "15.jpg",
            avatar: "1.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "16.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "17.jpg",
            avatar: "3.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "18.jpg",
            avatar: "4.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    575: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    991: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1199: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                navigation={{
                    prevEl: ".trend_prev",
                    nextEl: ".trend_next",
                }}
                className="custom-class"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="card items border-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center pb-3">
                                    <img
                                        src={`/images/avatar/${item.avatar}`}
                                        className="collector me-2 rounded-circle"
                                        width="30"
                                        alt=""
                                    />
                                    <h5 className="mb-0">John Abraham</h5>
                                </div>
                                <div className="items-img position-relative">
                                    <img
                                        src={`/images/items/${item.img}`}
                                        className="img-fluid rounded mb-3"
                                        alt=""
                                    />
                                    {/* <img
                                        src={`/images/avatar/${item.avatar}`}
                                        className="creator"
                                        width="50"
                                        alt=""
                                    /> */}
                                </div>
                                <h4 className="card-title">
                                    {item.title}
                                </h4>
                                <p></p>
                                <div className="d-flex justify-content-between">
                                    <div className="text-start">
                                        <p className="mb-2">Auction</p>
                                        <h5 className="text-muted">
                                            3h 1m 50s
                                        </h5>
                                    </div>
                                    <div className="text-end">
                                        <p className="mb-2">
                                            Bid :
                                            <strong className="text-primary">
                                                0.55 ETH
                                            </strong>
                                        </p>
                                        <h5 className="text-muted">
                                            0.55 ETH
                                        </h5>
                                    </div>
                                </div>
                                {/* <div className="d-flex justify-content-center mt-3">
                                    <Link href="/item">
                                        <a className="btn btn-primary">
                                            Place a Bid
                                        </a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="arrows">
                <span className="trend_prev">
                    <i className="bi bi-arrow-left"></i>
                </span>
                <span className="trend_next">
                    <i className="bi bi-arrow-right"></i>
                </span>
            </div>


        </>
    );
};

export default TrendingSlider;

