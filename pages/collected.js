// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileLayout from "../components/layout/ProfileLayout";

function Collected() {
    return (
        <>
            <LayoutFront
                headTitle="Collected"
                // pageTitle=""
                pageTitleSub={"Neflex Collected page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Collected"}
            >
                <ProfileLayout>
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card nft-style-one">

                            <div className="card-body">
                                <div className="d-flex align-items-center pb-3">
                                    <img
                                        src="/images/avatar/1.jpg"
                                        className="collector me-2 rounded-circle"
                                        width="30"
                                        alt=""
                                    />
                                    <h5 className="mb-0">John Abraham</h5>
                                </div>
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/1.jpg"
                                        className="img-fluid rounded"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card nft-style-one">
                            <div className="card-body">
                                <div className="d-flex align-items-center pb-3">
                                    <img
                                        src="/images/avatar/2.jpg"
                                        className="collector me-2 rounded-circle"
                                        width="30"
                                        alt=""
                                    />
                                    <h5 className="mb-0">John Abraham</h5>
                                </div>
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/2.jpg"
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card nft-style-one">
                            <div className="card-body">
                                <div className="d-flex align-items-center pb-3">
                                    <img
                                        src="/images/avatar/3.jpg"
                                        className="collector me-2 rounded-circle"
                                        width="30"
                                        alt=""
                                    />
                                    <h5 className="mb-0">John Abraham</h5>
                                </div>
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/3.jpg"
                                        className="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card nft-style-one">
                            <div className="card-body">
                                <div className="d-flex align-items-center pb-3">
                                    <img
                                        src="/images/avatar/4.jpg"
                                        className="collector me-2 rounded-circle"
                                        width="30"
                                        alt=""
                                    />
                                    <h5 className="mb-0">John Abraham</h5>
                                </div>
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/4.jpg"
                                        className="img-fluid rounded"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ProfileLayout>
            </LayoutFront>
        </>
    );
}
export default Collected;
