import React from "react";
import ExploreCollection from "../components/elements/ExploreCollection";
import LayoutFront from "../components/layout/LayoutFront";

const Explore = () => {
    return (
        <>
            <LayoutFront
                headTitle="Explore"
                // pageTitle="Explore"
                pageTitleSub={"Neflex Explore page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Payments"}
            >
                <div className="explore section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ExploreCollection />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Explore;
