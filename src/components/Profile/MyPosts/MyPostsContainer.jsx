import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={props.posts}
                    newPostText={props.newPostText}/>
};
export default MyPostsContainer;
