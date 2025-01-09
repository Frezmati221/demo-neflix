import Link from "next/link";
import React from "react";
import LayoutFront from "../components/layout/LayoutFront";
const OtpPhone = () => {
    return (
        <>
            <LayoutFront pageClass={"front"}>
                <div className="scan section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form two-fa">
                                    <h3 className="card-title mb-3">
                                        Confirmation
                                    </h3>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="tac px-4">
                                                <h4>Terms of service</h4>
                                                <p>
                                                    Please take a few minutes to
                                                    read and understand
                                                    Neflex{" "}
                                                    <Link href="#">
                                                        <a>Terms of Service</a>
                                                    </Link>
                                                    . To continue, you’ll need
                                                    to accept the terms of
                                                    services by checking the
                                                    boxes.
                                                </p>

                                                <div className="form-check d-flex">
                                                    <input
                                                        className="form-check-input me-3"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        for="flexCheckDefault"
                                                    >
                                                        I agree to the terms of
                                                        service
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <Link href="/">
                                                    <a>
                                                        <button className="btn btn-primary my-2 w-100">
                                                            Lets Go
                                                        </button>
                                                    </a>
                                                </Link>
                                                <Link href="#">
                                                    <a>
                                                        <button className="btn btn-outline-primary my-2 w-100">
                                                            Cancel
                                                        </button>
                                                    </a>
                                                </Link>
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
};

export default OtpPhone;
