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
                                <div className="auth-form card">
                                    <div className="card-body">
                                        <form className="identity-upload">
                                            <div className="identity-content">
                                                <span className="icon">
                                                    <i className="di bi-check"></i>
                                                </span>
                                                <h4>Congratulation. </h4>
                                                <p>
                                                    Your two factor
                                                    authantication successfully
                                                    complete
                                                </p>
                                            </div>

                                            <div className="text-center">
                                                <Link href="/security">
                                                    <a>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success ps-5 pe-5"
                                                        >
                                                            Continue
                                                        </button>
                                                    </a>
                                                </Link>
                                            </div>
                                        </form>
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
