import Link from "next/link";
import React, { useState } from "react";
import NftFour from "../widget/NftFour";

const data = [
    {
        id: 1,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "17.jpg",
        avatar: "7.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 2,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "18.jpg",
        avatar: "8.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 3,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "19.jpg",
        avatar: "9.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 4,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "20.jpg",
        avatar: "2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 5,
        title: "Liguid Wave",
        price: 0.55,
        currentBid: 0.55,
        img: "1.jpg",
        avatar: "3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 6,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "14.jpg",
        avatar: "4.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 7,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "15.jpg",
        avatar: "5.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 8,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "16.jpg",
        avatar: "6.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
];

const ExploreCollection = () => {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
        <>
            <div className="filter-tab">
                <div className="row justify-content-between align-items-center mb-3">
                    <div className="col-xl-3">
                        <div className="section-title mb-3">
                            <h2>Explore Collection</h2>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex">
                            <div className="filter-nav me-5">
                                <a className="active">All</a>
                                <a>Art</a>
                                <a>Domains</a>
                                <a>Games</a>
                                <a>Jewelry</a>
                                <a>Metaverse</a>
                                <a>Photography</a>
                            </div>

                            <div className="filter-btn text-end ">
                                <button
                                    className="btn btn-primary d-flex"
                                    onClick={toggleTrueFalse}
                                >
                                    Filter
                                    <i className="bi bi-filter ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <form
                    className={
                        isToggled ? "advance-filter open" : " advance-filter"
                    }
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="mb-3">
                                <label className="form-label">Sort</label>
                                <select name="" id="" className="form-control">
                                    <option value="">Latest</option>
                                    <option value="">Popular</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="mb-3">
                                <label className="form-label">PRICE</label>
                                <select name="" id="" className="form-control">
                                    <option value="">Latest</option>
                                    <option value="">Popular</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="mb-3">
                                <label className="form-label">CREATOR</label>
                                <select name="" id="" className="form-control">
                                    <option value="">Latest</option>
                                    <option value="">Popular</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="mb-3">
                                <label className="form-label">PRICE Range</label>
                                <input
                                    type="range"
                                    className="form-range"
                                    id="customRange1"
                                />
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row">
                    {data.map((item, i) => (
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">

                            {/* <NftFour/> */}
                            <Link href="/collection">
                                <a className="card explore-collection border-0">
                                    <div className="items-img position-relative">
                                        <img
                                            src={`/images/items/${item.img}`}
                                            className="img-fluid card-img-top"
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="collection-brand">
                                            <img src={`/images/avatar/${item.avatar}`} alt="" />
                                        </div>
                                        <h4 className="card-title">{item.title}</h4>
                                        <div className="d-flex align-items-center pt-3 justify-content-center">
                                            <span className="me-1 text-muted">by</span>
                                            {/* <img
                                                src={`/images/avatar/${item.avatar}`}
                                                className="collector me-2 ms-2 rounded-circle"
                                                width="30"
                                                alt=""
                                            /> */}
                                            <Link href="/profile">
                                                <a><h5 className="mb-0 text-primary">John Abraham <i class="bi bi-check-circle-fill ms-2 text-success lh-0"></i></h5></a>
                                            </Link>

                                        </div>

                                        <p className="text-muted mb-0 mt-3">{item.desc}</p>

                                    </div>
                                </a>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExploreCollection;
