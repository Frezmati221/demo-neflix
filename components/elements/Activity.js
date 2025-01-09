import React from 'react';

const ActivityList = () => {
    const data = [
        {
            title: "Avy",
            img: "11.jpg"
        },
        {
            title: "Mark",
            img: "12.jpg"
        },
        {
            title: "Mark",
            img: "10.jpg"
        },
        {
            title: "Mark",
            img: "9.jpg"
        },
        {
            title: "Mark",
            img: "8.jpg"
        },
    ];
    return (
        <>
            <div className="activity-list">
                <ul>
                    {data.map((item, i) => (
                        <li>
                            <div className="d-flex align-items-center">
                                <img
                                    src={`/images/avatar/${item.img}`}
                                    className="collector me-3 rounded-circle"
                                    width="100"
                                    alt=""
                                />
                                <div>
                                    <h4>
                                        SomETHing went wrong
                                    </h4>
                                    <p>
                                        Account created
                                        successfully
                                    </p>
                                    <span>2 days ago</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ActivityList;