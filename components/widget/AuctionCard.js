import React from "react";

const AuctionCard = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card nft-style-one">
                    <div className="card-body">
                        <div className="items-img position-relative">
                            <img
                                src="/images/items/5.jpg"
                                className="img-fluid rounded mb-3"
                                alt=""
                            />
                            <img
                                src="/images/avatar/5.jpg"
                                className="creator"
                                width="50"
                                alt=""
                            />
                            <span className="loved">
                                <i className="bi bi-heart"></i> 36
                            </span>
                        </div>
                        <h4 className="card-title">Liguid Wave</h4>
                        <p></p>
                        <div className="d-flex justify-content-between">
                            <div className="text-start">
                                <p className="mb-2">Auction</p>
                                <h5 className="text-muted">3h 1m 50s</h5>
                            </div>
                            <div className="text-end">
                                <p className="mb-2">
                                    Bid :{" "}
                                    <strong className="text-primary">
                                        0.55 ETH
                                    </strong>
                                </p>
                                <h5 className="text-muted">0.55 ETH</h5>
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

export default AuctionCard;
