import React from "react";
import Link from "next/link"

const CollectionCover = () => {
    return (
        <>
            <div className="collection-cover-photo">
                <div className="cover-photo-img">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-12">
                                <div className="cover-intro">
                                    <div className="collection-logo">
                                        <img
                                            src="/images/avatar/7.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <br />
                                    <Link href="#">
                                    <a className="eth-url">
                                        Pacific{" "}
                                        <i class="bi bi-box-arrow-up-right"></i>
                                    </a>
</Link>
                                    <h2>Pacific Minimal</h2>
                                    <div class="collector-username">
                                        <img
                                            src="/images/avatar/2.jpg"
                                            alt=""
                                        />
                                        <h6 class="mb-0">John Abraham</h6>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionCover;
