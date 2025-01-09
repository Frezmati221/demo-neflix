// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileLayout from "../components/layout/ProfileLayout";

function Followers() {
    return (
        <>
            <LayoutFront
                headTitle="Followers"
                // pageTitle="Followers"
                pageTitleSub={"Neflex Followers page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Followers"}
            >
                <ProfileLayout>
                    <div className="col-xl-12">
                        <div className="follow-followers">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="follower-img me-3">
                                        <img
                                            src="/images/avatar/1.jpg"
                                            alt=""
                                            width="100"
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="top-creators-info">
                                        <h5 className="mb-0">
                                            Terry Camacho
                                        </h5>
                                        <p className="mb-2">
                                            60 Items
                                        </p>
                                        <a className="badge bg-secondary px-2 py-2">
                                            Unfollow
                                        </a>
                                    </div>
                                </div>
                                <div className="following-gallery">
                                    <img
                                        src="/images/items/1.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/2.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/3.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/4.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/5.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-5">
                                <div className="d-flex align-items-center">
                                    <div className="follower-img me-3">
                                        <img
                                            src="/images/avatar/5.jpg"
                                            alt=""
                                            width="100"
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="top-creators-info">
                                        <h5 className="mb-0">
                                            Terry Camacho
                                        </h5>
                                        <p className="mb-2">
                                            60 Items
                                        </p>
                                        <a className="badge bg-secondary px-2 py-2">
                                            Unfollow
                                        </a>
                                    </div>
                                </div>
                                <div className="following-gallery">
                                    <img
                                        src="/images/items/6.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/7.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/8.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/9.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/10.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="follower-img me-3">
                                        <img
                                            src="/images/avatar/9.jpg"
                                            alt=""
                                            width="100"
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="top-creators-info">
                                        <h5 className="mb-0">
                                            Terry Camacho
                                        </h5>
                                        <p className="mb-2">
                                            60 Items
                                        </p>
                                        <a className="badge bg-secondary px-2 py-2">
                                            Unfollow
                                        </a>
                                    </div>
                                </div>
                                <div className="following-gallery">
                                    <img
                                        src="/images/items/11.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/12.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/13.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/14.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/15.jpg" width="100" className="ms-2 rounded"
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
export default Followers;
