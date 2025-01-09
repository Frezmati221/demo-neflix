import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
// import "react-modal-video/css/modal-video.css";
import ExploreFilter from "../components/elements/Discover";
import PlaceBidPopup from "../components/elements/PlaceBidPopup";
import LayoutFront from "../components/layout/LayoutFront";
import IntroSlider from "../components/slider/IntroSlider";

// const ModalVideo = dynamic(import("react-modal-video"), {
    //     ssr: false,
    // });
    import TrendingSlider from "../components/slider/Trending";
import PopularSeller from './../components/elements/PopularSeller';
import HotCollection from './../components/elements/HotCollection';

const Index = () => {
    const [isOpen, setOpen] = useState(false);
    const [openClass, setOpenClass] = useState("");
    const handleOpen = () => setOpenClass("open");
    const handleRemove = () => {
        if (openClass === "open") {
            setOpenClass("");
        }
    };

    return (
        <>
            <LayoutFront pageClass={"front"}>
                <div className="intro1 section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <IntroSlider handleOpen={handleOpen} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trending-auction section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center d-flex justify-content-between mb-3">
                                    <h2>Trending Auction</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="trending-auction-slider">
                                    <TrendingSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="explore-filter section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ExploreFilter />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="popular-seller section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title d-flex justify-content-between mb-3">
                                    <div>
                                        <h2>Popular Seller</h2>
                                    </div>
                                    <div className="arrows">
                                        <span>
                                            <i className="bi bi-arrow-left"></i>
                                        </span>
                                        <span>
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">                            
                            <PopularSeller/>
                        </div>
                    </div>
                </div>
                <div className="hot-collection section-padding bg-light triangle-top-light triangle-bottom-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title d-flex justify-content-between mb-3">
                                    <h2>Hot Collection</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <HotCollection/>
                        </div>
                    </div>
                </div>

                <div className="cta section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cta-content">
                                    <img src="/images/logoi.png" alt="" width="200" />
                                    <h4>Create, Sell, Buy.</h4>
                                    <Link href="/signin">
                                        <a className="btn btn-primary">
                                            Sign Up
                                        </a>
                                    </Link>
                                    <Link href="/explore">
                                        <a className="btn btn-outline-primary">
                                            Explore
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PlaceBidPopup
                    handleRemove={handleRemove}
                    openClass={openClass}
                />
            </LayoutFront>
        </>
    );
};

export default Index;
