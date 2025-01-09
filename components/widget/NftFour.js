import React from "react";

const NftFour = () => {
    return (
        <>
                <div className="card nft-style-four">
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
                            <h6 className="cat">XYZ</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div className="d-flex align-items-center">
                                <img
                                    src="/images/avatar/5.jpg"
                                    className="avatar me-2"
                                    alt=""
                                />
                                <div>
                                    <span>Creator</span>
                                    <h5>@imsaifun</h5>
                                </div>
                            </div>
                            <div>
                                <span>Current Bid</span>
                                <h5>0.0254 ETH</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <a href="" className="btn btn-primary m-1">
                                Place a Bid
                            </a>
                            <a href="" className="btn btn-primary m-1">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default NftFour;
