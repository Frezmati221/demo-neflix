import PersonalInfo from "../components/form/PersonalInfo";
import UpdateAvatar from "../components/form/UpdateAvatar";
import UpdateInfo from "../components/form/UpdateInfo";
import LayoutFront from "../components/layout/LayoutFront";
import SettingsMenu from "../components/layout/SettingsMenu";

function SettingsProfile() {
    return (
        <>
            <LayoutFront
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Neflex Profile page"}
                pageClass={"front"}
                parent={"Settings"}
                child={"Profile"}
            >
                <div className="section-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-2">
                                <SettingsMenu />
                            </div>
                            <div className="col-xl-9">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <h4 className="card-title mb-3">
                                            User Profile
                                        </h4>
                                        <div className="card">
                                            <div className="card-body">
                                                <UpdateAvatar />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <h4 className="card-title mb-3">
                                            Update Profile
                                        </h4>
                                        <div className="card">
                                            <div className="card-body">
                                                <UpdateInfo />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <h4 className="card-title mb-3">
                                            Personal Information
                                        </h4>
                                        <div className="card">
                                            <div className="card-body">
                                                <PersonalInfo />
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
