import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";


const MyPosts = (props) => {


    let postsElements = props.store.post.map(p => <Post message={p.message} like={p.likeCount}/>)
    let newPostElement = React.useRef()

    let addPost = () => {

        props.dispatch(addPostActionCreator())

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.dispatch(updateNewPostTextActionCreator(text))

    }
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.store.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}> Add Post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
export default MyPosts;
