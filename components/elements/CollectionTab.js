
import React, { useState } from "react";
import ActivityList from './Activity';
import CollectionNFT from './CollectionNFT';

function CollectionTab() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <ul className="collection-tab-nav">
                <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "active" : ""}>NFT's</a></li>
                {/* <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "active" : ""}>Description</a></li> */}
                <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "active" : ""}>Activity</a></li>
            </ul>


            <div className={activeIndex === 1 ? "active" : "d-none"}> 
            <div className="row">
                <CollectionNFT/>
            </div>
            </div>
            {/* <div className={activeIndex === 2 ? "active" : "d-none"}> This is Text Two</div> */}
            <div className={activeIndex === 3 ? "active" : "d-none"}> 
            <ActivityList/>
            
            </div>
        </>
    );
}

export default CollectionTab;
