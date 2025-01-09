import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";

function Create() {
    return (
        <>
            <LayoutFront
                headTitle="Create"
                pageTitle="Create"
                pageTitleSub={"Neflex Create page"}
                pageClass={"front"}
                parent={"Settings"}
                child={"Create"}
            >
                <div className="create-collection section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row justify-content-between">
                                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                                        <div className="create-collection-step">
                                            <strong className="text-muted">
                                                STEP 1 Of 2
                                            </strong>
                                            <h2 className="mt-3">
                                                Choose Collection
                                            </h2>
                                            <p>
                                                A small fee per NFT may be
                                                charged reflecting network
                                                costs.
                                            </p>

                                            <h5 className="mb-3 mt-5">
                                                Collection
                                            </h5>
                                            <div className="create-collection-form">
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <Link href="/new-collection">
                                                            <a>
                                                                <div className="create-collection-widget create">
                                                                    <div>
                                                                        <span>
                                                                            <i className="bi bi-plus"></i>
                                                                        </span>
                                                                        <h6>
                                                                            Create
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <div className="create-collection-widget">
                                                            <div>
                                                                <span>
                                                                    <img
                                                                        src="/images/avatar/1.jpg"
                                                                        alt=""
                                                                        width="40"
                                                                        className="rounded-circle"
                                                                    />
                                                                </span>
                                                                <h6>
                                                                    Netflix &
                                                                    Shil
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <div className="create-collection-widget">
                                                            <div>
                                                                <span>
                                                                    <i className="bi bi-check-circle-fill text-success"></i>
                                                                </span>
                                                                <h6>
                                                                    Verified
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="create-collection">
                                                    <a className="btn btn-primary w-100">
                                                        Continue
                                                    </a>
                                                </Link>
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
export default Create;
