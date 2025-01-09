import Link from "next/link";
import React from "react";
import LayoutFront from "../components/layout/LayoutFront";
const OtpCode = () => {
    return (
        <>
        
                <div className="verification section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                            <div className="mini-logo text-center mb-5">
                                <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                                <div className="auth-form two-fa">
                                    <div className="card">
                                        <div className="card-body">
                                            <Link href="/otp1">
                                                <a className="page-back text-muted">
                                                    <span>
                                                        <i className="bi bi-angle-left"></i>
                                                    </span>{" "}
                                                    Back
                                                </a>
                                            </Link>
                                            <h3 className="text-center">
                                                OTP Verification
                                            </h3>
                                            <p className="text-center mb-5">
                                                We will send one time code on
                                                this number
                                            </p>
                                            <form action="index.html">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Your OTP Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center font-weight-bold"
                                                        value="11 22 33"
                                                    />
                                                </div>
                                                <div className="text-center mt-5">
                                                    <Link href="/otp-success">
                                                        <a>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-success w-100"
                                                            >
                                                                Verify
                                                            </button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </form>
                                            <div className="info mt-3">
                                                <small className="text-muted">
                                                    You dont recommended to save
                                                    password to browsers!
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default OtpCode;
