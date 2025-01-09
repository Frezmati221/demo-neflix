import React from "react";

const NftFive = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card nft-style-five">
                    <div className="card-body">
                        <div className="items-img position-relative mb-3">
                            <img
                                src="/images/items/5.jpg"
                                className="img-fluid rounded"
                                alt=""
                            />

                            <span className="loved">
                                <i className="bi bi-heart"></i> 36
                            </span>
                            <div className="counter">3h 1m 50s</div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="card-title">Liguid Wave</h4>
                            <h6 className="dot">...</h6>
                        </div>
                        <div className="bidder">
                            <div className="bidder-img">
                                <img
                                    src="/images/avatar/1.jpg"
                                    className="avatar b1"
                                    alt=""
                                />
                                <img
                                    src="/images/avatar/2.jpg"
                                    className="avatar b2"
                                    alt=""
                                />
                                <img
                                    src="/images/avatar/3.jpg"
                                    className="avatar b3"
                                    alt=""
                                />
                            </div>
                                <p>5+ People place bit</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div className="d-flex align-items-center">
                                Owned by
                                <div>
                                    <h5 className="mb-0"> @imsaifun</h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-arrow-up"></i>
                                <h5 className="mb-0 ms-2">0.0254 ETH</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <a href="" className="btn btn-primary">
                                Place a Bid
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NftFive;
