import LayoutFront from "../components/layout/LayoutFront";
import CollectionLayout from "../components/layout/CollectionLayout";
import ProfileBio from "../components/elements/ProfileBio";
import CollectionTab from './../components/elements/CollectionTab';
function Profile() {
    return (
        <>
            <LayoutFront
                headTitle="Collection"
                pageTitleSub={"Neflex Profile page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Profile"}
            >
                <CollectionLayout>

                    <div className="col-12">
                        <CollectionTab />
                    </div>


                </CollectionLayout>
            </LayoutFront>
        </>
    );
}
export default Profile;
