import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
/*import {addPost} from "../../../redux/state";*/

const MyPosts = (props) => {
    let postsElements = props.post.map(p => <Post message={p.message} like={p.likeCount}/>)
    let newPostElement = React.useRef()

    let clic = () => {

        props.addPost()

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={clic}> Add Post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
export default MyPosts;
