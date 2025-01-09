// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileLayout from "../components/layout/ProfileLayout";
import ActivityList from './../components/elements/Activity';

const data = [
    {
        title: "Avy",
        img: "11.jpg"
    },
    {
        title: "Mark",
        img: "12.jpg"
    },
    {
        title: "Mark",
        img: "10.jpg"
    },
    {
        title: "Mark",
        img: "9.jpg"
    },
    {
        title: "Mark",
        img: "8.jpg"
    },
];

function Acitivity() {
    return (
        <>
            <LayoutFront
                headTitle="Activity"
                // pageTitle="Activity"
                pageTitleSub={"Neflex Activity page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Activity"}
            >
                <ProfileLayout>
                    <div className="col-xl-9">
                           <ActivityList/>
                    </div>
                    <div className="col-xl-3">
                        <h4 className="card-title mb-3">Filter</h4>
                        <div className="activity-fliter card">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <a className="active">All Activity</a>
                                    </li>
                                    <li>
                                        <a href="">My Activity</a>
                                    </li>
                                    <li>
                                        <a href="">Following</a>
                                    </li>
                                    <li>
                                        <a href="">Following</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ProfileLayout>
            </LayoutFront>
        </>
    );
}
export default Acitivity;
