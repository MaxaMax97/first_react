import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
/*import {addPost} from "../../../redux/_state";*/

const MyPosts = (props) => {

    let postsElements = props.store._state.profilePage.post.map(p => <Post message={p.message} like={p.likeCount}/>)
    let newPostElement = React.useRef()

    let addPost = () => {

        props.dispatch({type: 'ADD-POST'})

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})

    }
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.store._state.profilePage.newPostText}
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
