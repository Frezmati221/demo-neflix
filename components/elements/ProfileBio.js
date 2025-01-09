import React from "react";

function ProfileBio() {
    return (
        <>
            <div className="profile-bio card">
                <div className="card-body">
                    <img
                        src="/images/profile/5.jpg"
                        className="user-img"
                        alt=""
                    />
                    <h6 className="username">@Neflex</h6>
                    <h4 className="user-title">
                        John Breasons
                        <span className="verified-id">
                            <i className="bi bi-check-circle-fill ms-3 text-primary"></i>
                        </span>
                    </h4>
                    <div className="wallet-address">
                        012jf5684464...dh6845eer2598
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nemo, recusandae.
                    </p>
                    <a href="#" className="url">
                        <i className="bi bi-globe"></i>
                        https://saifun.velcel.app
                    </a>
                    <h5 className="follow-btn mt-5">Share</h5>
                    <div className="social-url">
                        <a href="#">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="follow-widget">
                                <p className="mb-0">Follow</p>
                                <h4>252</h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="follow-widget">
                                <p className="mb-0">Following</p>
                                <h4>6,584</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileBio;
