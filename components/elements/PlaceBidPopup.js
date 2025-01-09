import React from "react";
import PlaceBid from "../form/PlaceBid";

const PlaceBidPopup = ({openClass, handleRemove}) => {
    return (
        <>
            <div className={`${openClass} place-bid-popup`}>
                <div className="place-bid-popup-content">
                    <span className="remove" onClick={handleRemove}>
                        <i className="bi bi-x"></i>
                    </span>
                    <h3>Place a bid</h3>
                    <PlaceBid />
                </div>
            </div>
        </>
    );
};

export default PlaceBidPopup;
