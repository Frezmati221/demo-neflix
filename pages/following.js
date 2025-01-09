
// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileLayout from "../components/layout/ProfileLayout";

function Following() {
    return (
        <>
            <LayoutFront
                headTitle="Following"
                // pageTitle="Following"
                pageTitleSub={"Neflex Following page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Following"}
            >
                <ProfileLayout>
                    <div className="col-xl-12">
                        <div className="follow-followers">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="follower-img me-3">
                                        <img
                                            src="/images/avatar/3.jpg"
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
                                        src="/images/items/16.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/17.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/18.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/19.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/20.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-5">
                                <div className="d-flex align-items-center">
                                    <div className="follower-img me-3">
                                        <img
                                            src="/images/avatar/7.jpg"
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
                                        src="/images/items/21.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/22.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/23.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/24.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/25.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="follower-img me-3">
                                        <img
                                            src="/images/avatar/8.jpg"
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
                                        src="/images/items/26.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
                                    <img
                                        src="/images/items/27.jpg" width="100" className="ms-2 rounded"
                                        alt=""
                                    />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </ProfileLayout>
            </LayoutFront>
        </>
    );
}
export default Following;
