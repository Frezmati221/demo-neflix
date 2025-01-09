import React from "react";

const NftTwo = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card nft-style-two">
                    <div className="card-body">
                        <div className="items-img position-relative">
                            <img
                                src="/images/items/5.jpg"
                                className="img-fluid rounded mb-3"
                                alt=""
                            />

                            <span className="loved">
                                <i className="bi bi-heart"></i> 36
                            </span>
                            <div className="counter">3h 1m 50s</div>
                        </div>
                        <h4 className="card-title">Liguid Wave</h4>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img
                                    src="/images/avatar/5.jpg"
                                    className="avatar me-2"
                                    alt=""
                                />
                                <span>@imsaifun</span>
                            </div>
                            <div>
                                <span>Current Bid</span>
                                <h5>0.0254 ETH</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <a href="" className="btn btn-primary m-1">
                                Place a Bid
                            </a>
                            <a href="" className="btn btn-primary m-1">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NftTwo;
