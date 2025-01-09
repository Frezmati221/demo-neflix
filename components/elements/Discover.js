import Link from "next/link";
import React, { useState } from "react";

const data = [
    {
        id: 1,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "17.jpg",
        avatar: "7.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 2,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "18.jpg",
        avatar: "8.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 3,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "19.jpg",
        avatar: "9.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 4,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "20.jpg",
        avatar: "2.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 5,
        title: "Liguid Wave",
        price: 0.55,
        currentBid: 0.55,
        img: "1.jpg",
        avatar: "3.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 6,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "14.jpg",
        avatar: "4.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 7,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "15.jpg",
        avatar: "5.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 8,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "16.jpg",
        avatar: "6.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
];

const Discover = () => {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
        <>
            <div className="filter-tab">
                <div className="row justify-content-between align-items-center mb-3">
                    <div className="col-xl-2">
                        <div className="section-title mb-3">
                            <h2>Discover</h2>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex">
                            <div className="filter-nav">
                                <a className="active">All</a>
                                <a>Art</a>
                                <a>Domains</a>
                                <a>Games</a>
                                <a>Jewelry</a>
                                <a>Metaverse</a>
                                <a>Photography</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {data.map((item, i) => (
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <Link href="/item">
                                <a className="card items style-2 border-0">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center pb-3">
                                            <img
                                                src={`/images/avatar/${item.avatar}`}
                                                className="collector me-2 rounded-circle"
                                                width="30"
                                                alt=""
                                            />
                                            <h5 className="mb-0">John Abraham</h5>
                                        </div>
                                        <div className="items-img position-relative">
                                            <img
                                                src={`/images/items/${item.img}`}
                                                className="img-fluid rounded mb-3"
                                                alt=""
                                            />
                                        </div>

                                        <h4 className="card-title">{item.title}</h4>
                                        <p className="pt-2 mb-0 text-muted">Edition size : 1</p>

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

export default Discover;
