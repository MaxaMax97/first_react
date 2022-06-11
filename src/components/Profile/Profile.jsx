import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     newPostText={props.post.newPostText}
                     post={props.post.post}
                     addPost={props.addPost}/>
        </div>
    )
};

export default Profile;
