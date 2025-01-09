import React from "react";

const NftThree = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card nft-style-three">
                    <div className="items-img position-relative">
                        <img
                            src="/images/items/5.jpg"
                            className="img-fluid"
                            alt=""
                        />

                        <img
                            src="/images/avatar/5.jpg"
                            className="avatar me-2"
                            alt=""
                        />
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <h4 className="card-title">Liguid Wave</h4>
                            <span className="loved">
                                <i className="bi bi-heart"></i> 36
                            </span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <div className="auction">
                                <span>Auction</span>
                                <h5 className="counter mb-0">3h 1m 50s</h5>
                            </div>
                            <div className="text-end">
                                <span>Price</span>
                                <h5 className="mb-0">0.0254 ETH</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NftThree;
