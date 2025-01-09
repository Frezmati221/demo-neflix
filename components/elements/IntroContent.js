import Link from "next/link";
import React from 'react';
import Timer from './Timer';

const IntroContent = ({ handleOpen }) => {

    return (
        <>
            <div className="intro-slider-content">
                <h1>Marco carrillo</h1>

                <div className="d-flex justify-content-between">
                    <div className="creator">

                        <p className='mb-2'>Creator</p>
                        <div className="creator-content">
                            <img
                                src="/images/avatar/1.jpg"
                                alt=""
                            />
                            <h6 className='pe-3'>John Abraham</h6>
                        </div>
                    </div>
                    <div className="collector">

                        <p className='mb-2'>Instant Price</p>
                        <div className="collector-content">
                            <img
                                src="/images/avatar/2.jpg"
                                alt=""
                            />
                            <h6 className='pe-3'>John Abraham</h6>
                        </div>
                    </div>
                </div>

                <div className="bid-counter">
                    <h6>Current Bid</h6>
                    <h2>1.025 ETH</h2>
                    <h4>$5,684.35</h4>

                    <p>Auction ending in</p>

                    <div className="countdown">
                        <div className="row">
                            <Timer endDateTime="2022-11-27 00:00:00" />
                        </div>
                    </div>
                </div>
                <div className="intro-slider-btn">
                    <a
                        onClick={handleOpen}
                        className="btn btn-dark w-100 py-2 my-2"
                    >
                        Place a bid
                    </a>
                    <Link href="/item">
                    <a
                        
                        className="btn btn-primary py-2 w-100 my-2"
                    >
                        View Details
                    </a>
                    </Link>
                    
                </div>
            </div>

            {/* <PlaceBidPopup/> */}

        </>
    );
};

export default IntroContent;