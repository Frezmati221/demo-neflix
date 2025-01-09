import React from "react";

const ProfileCover = () => {
    return (
        <>
            <div className="cover-photo">
                <div className="cover-photo-img"></div>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-12">
                            <div className="profile-btn">
                                <button className=" btn btn-primary edit-profile-btn me-3">
                                    <span>Edit cover photo</span>
                                    <i className="bi bi-pencil-square ms-3"></i>
                                </button>
                                <a
                                    className="btn btn-secondary edit-profile-btn "
                                    href="#"
                                >
                                    <span>Edit profile</span>
                                    <i className="bi bi-image-fill ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCover;
