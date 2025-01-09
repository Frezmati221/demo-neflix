import Link from "next/link";
import CreateCollection from "../components/form/CreateCollection";
import LayoutFront from "../components/layout/LayoutFront";

function SettingsProfile() {
    return (
        <>
            <LayoutFront
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Neflex Profile page"}
                pageClass={"admin"}
                parent={"Settings"}
                child={"Profile"}
            >
                <div className="create-collection section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row justify-content-between">
                                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                                        <div className="create-collection-step">
                                            <span className="text-muted">
                                                STEP 1 Of 2
                                            </span>
                                            <h2 className="mt-3">Create NFT</h2>
                                            <p>
                                                A small fee per NFT may be
                                                charged reflecting network
                                                costs.
                                            </p>

                                            <h5>Upload file</h5>
                                            <div className="create-collection-form">
                                                <CreateCollection/>
                                                <div className=" mt-3">
                                                        <Link href="create">
                                                            <a className="text-dark">Back</a>
                                                        </Link>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-6">
                                        <h4 className="card-title mb-3">
                                            Preview
                                        </h4>
                                        <div className="card items">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                    <img
                                                        src="/images/avatar/5.jpg"
                                                        className="rounded-circle me-2"
                                                        width="25"
                                                        alt=""
                                                    />
                                                    <h5 className="mb-0">
                                                        @creator
                                                    </h5>
                                                </div>
                                                <div className="items-img position-relative">
                                                    <img
                                                        src="/images/items/5.jpg"
                                                        className="img-fluid rounded mb-3"
                                                        alt=""
                                                    />
                                                </div>

                                                <h4 className="card-title mb-2">
                                                        Liguid Wave
                                                    </h4>
                                                <div className="d-flex justify-content-between">
                                                    <div className="text-start">
                                                        <p className="mb-2">
                                                            Creator
                                                        </p>
                                                        <h5 className="text-sark">
                                                            John Abrahmam
                                                        </h5>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-2">
                                                            Price
                                                        </p>
                                                        <h5 className="text-sark">
                                                            0.55 ETH
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
}
export default SettingsProfile;
