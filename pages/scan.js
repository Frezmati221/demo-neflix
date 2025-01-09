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
                            <div className="col-xl-3 col-md-6">
                                <div className="auth-form two-fa">
                                    <h3 className="card-title mb-3">
                                        Scan QR Code
                                    </h3>
                                    <div className="card">
                                        <div className="card-body">
                                            <Link href="/confirm">
                                                <a>
                                                    <img
                                                        src="/images/qr.png"
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </Link>
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
