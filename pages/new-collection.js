import Link from "next/link";
import NewCollection from "../components/form/NewCollection";
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
                <div className="new-collection section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row justify-content-center">
                                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                                        <h4 className="card-title mb-3">
                                            New Collection
                                        </h4>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="new-collection-form">
                                                    <NewCollection />
                                                    <div className=" mt-3">
                                                        <Link href="create">
                                                            <a className="text-dark">Back</a>
                                                        </Link>
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
