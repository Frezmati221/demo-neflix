import React from 'react';

const IntroCountDown = ({day, sec, hour, min}) => {
    return (
        <>
            <div className="col">
                <h3>{hour}</h3>
                <p>Hrs</p>
            </div>
            <div className="col">
                <h3>{min}</h3>
                <p>Min</p>
            </div>
            <div className="col">
                <h3>{sec}</h3>
                <p>Sec</p>
            </div>
        </>
    );
};

export default IntroCountDown;