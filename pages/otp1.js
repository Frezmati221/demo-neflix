import Link from "next/link";
import React from "react";
import LayoutFront from "../components/layout/LayoutFront";
const OtpPhone = () => {
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
                                            <h3 className="text-center">
                                                OTP Verification
                                            </h3>
                                            <p className="text-center mb-5">
                                                We will send one time code on
                                                this number
                                            </p>
                                            <form action="otp-2.html">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Your phone number
                                                    </label>
                                                    <div className="input-group mb-3">
                                                        {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="bi bi-phone"></i>
                                                            </span>
                                                        </div> */}
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value="+1 12365480"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <Link href="/otp2">
                                                        <a>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-success w-100"
                                                            >
                                                                Send
                                                            </button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </form>
                                            <div className="new-account mt-3 d-flex justify-content-between">
                                                <p>
                                                    Don't get code?{" "}
                                                    <a
                                                        className="text-primary"
                                                        href="otp-1.html"
                                                    >
                                                        Resend
                                                    </a>
                                                </p>
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

export default OtpPhone;
