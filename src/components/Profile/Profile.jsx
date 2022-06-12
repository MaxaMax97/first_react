import MyPosts from "./MyPosts/MyPosts";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.store.createPost.updateNewPostText}
                     newPostText={props.store.state.profilePage.newPostText}
                     post={props.store.state.profilePage.post}
                     addPost={props.store.createPost.addPost}/>
        </div>
    )
};

export default Profile;
