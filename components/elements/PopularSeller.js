import React from 'react';

const PopularSeller = () => {
    const data = [
        {
            img: "1.jpg",
            title: "Avy"
        },
        {
            img: "2.jpg",
            title: "Mark"
        },
        {
            img: "3.jpg",
            title: "Avy"
        },
        {
            img: "4.jpg",
            title: "Mark"
        },
        {
            img: "5.jpg",
            title: "Avy"
        },
        {
            img: "6.jpg",
            title: "Mark"
        },

    ];
    return (
        <>


            {data.map((item, i) => (
                <div className="col-xl-2 col-lg-6 col-md-6">
                    <div className="card">
                        <div className="card-body popular-avatar">
                            <div className="ranking">
                                <span className="serial">#01</span>
                                <a href="#">
                                    <i className="bi bi-arrow-right"></i>
                                </a></div>
                            <div className="popular-avatar-content">
                                <img
                                    src={`/images/avatar/${item.img}`}
                                    alt=""
                                />
                                <h4>Jonh Abraham</h4>
                                <div className="price">
                                    <strong>2.68</strong> ETH
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PopularSeller;