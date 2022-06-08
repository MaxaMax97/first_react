import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts data={props.data}/>
        </div>
    )
};

export default Profile;