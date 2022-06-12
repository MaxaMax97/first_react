import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} store={props.store}
            />
        </div>
    )
};

export default Profile;
