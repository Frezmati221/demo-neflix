import LayoutFront from "../components/layout/LayoutFront";
import ProfileLayout from "../components/layout/ProfileLayout";
function Profile() {
    return (
        <>
            <LayoutFront
                headTitle="Profile"
                pageTitleSub={"Neflex Profile page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Profile"}
            >
                <ProfileLayout>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-primary">
                                <span>
                                    <i className="ri-file-copy-2-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>24K</h3>
                                <p>Artworks</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-success">
                                <span>
                                    <i className="ri-file-list-3-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>82K</h3>
                                <p>Auction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-warning">
                                <span>
                                    <i className="ri-file-paper-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>200</h3>
                                <p>Creators</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget d-flex align-items-center">
                            <div className="widget-icon me-3 bg-danger">
                                <span>
                                    <i className="ri-file-paper-2-line"></i>
                                </span>
                            </div>
                            <div className="widget-content">
                                <h3>89</h3>
                                <p>Canceled</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-12">
                        <div className="card welcome-profile">
                            <div className="card-body">
                                {/* <img src="/images/avatar/1.jpg" alt="" /> */}
                                <h4>Bio</h4>
                                <p>
                                    Looks like you are not verified yet. Verify
                                    yourself to use the full potential of
                                    Xtrader.
                                </p>

                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="verified">
                                                <i className="ri-check-line"></i>
                                            </span>
                                            Verify account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="not-verified">
                                                <i className="ri-shield-check-line"></i>
                                            </span>
                                            Two-factor authentication (2FA)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4">
                        <div className="card social-verify">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm mb-0">
                                            <i className="bi bi-facebook me-2"></i>
                                            Neflex
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span className="text-sm">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        </span>
                                    </div>
                                </div>

                                <hr className="my-3" />

                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm mb-0">
                                            <i className="bi bi-instagram me-2"></i>
                                            Neflex
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="text-sm">
                                            Connect
                                        </a>
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm mb-0">
                                            <i className="bi bi-twitter me-2"></i>
                                            Neflex
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span>Connect</span>
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm mb-0">
                                            <i className="bi bi-youtube me-2"></i>
                                            Neflex
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span>Connect</span>
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-sm mb-0">
                                            <i className="bi bi-linkedin me-2"></i>
                                            Neflex
                                        </h6>
                                    </div>
                                    <div className="col-auto">
                                        <span>Connect</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">
                                    VERIFY &amp; UPGRADE{" "}
                                </h4>
                            </div>
                            <div className="card-body">
                                <h5>
                                    Account Status :{" "}
                                    <span className="text-warning">
                                        Pending{" "}
                                        <i className="icofont-warning"></i>
                                    </span>{" "}
                                </h5>
                                <p>
                                    Your account is unverified. Get verified to
                                    enable funding, trading, and withdrawal.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    {" "}
                                    Get Verified
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="card-header px-0">
                            <h4 className="card-title">Information </h4>
                            <a
                                href="./settings-profile.html"
                                className="btn btn-primary"
                            >
                                Edit
                            </a>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <form className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="user-info">
                                            <span>USER ID</span>
                                            <h4>818778</h4>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="user-info">
                                            <span>EMAIL ADDRESS</span>
                                            <h4>email@example.com</h4>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="user-info">
                                            <span>COUNTRY OF RESIDENCE</span>
                                            <h4>Bangladesh</h4>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="user-info">
                                            <span>JOINED SINCE</span>
                                            <h4>20/10/2020</h4>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="user-info">
                                            <span>TYPE</span>
                                            <h4>Personal</h4>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ProfileLayout>
            </LayoutFront>
        </>
    );
}
export default Profile;
