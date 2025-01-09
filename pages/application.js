import Preferences from "../components/form/Preferences";
import LayoutFront from "../components/layout/LayoutFront";
import SettingsMenu from "../components/layout/SettingsMenu";
function SettingsPreferences() {
    return (
        <>
            <LayoutFront
                headTitle="Application"
                pageTitle="Application"
                pageTitleSub={"Neflex Settings Application page"}
                pageClass={"front"}
                parent={"Settings"}
                child={"Application"}
            >
                <div className="section-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xxl-2">
                                <SettingsMenu />
                            </div>
                            <div className="col-xxl-9">
                                <h4 className="card-title mb-3">Preperences</h4>
                                <div className="card">
                                    <div className="card-body">
                                        <Preferences />
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
export default SettingsPreferences;
