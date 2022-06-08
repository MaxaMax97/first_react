import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    /*    let post = [
            {id: 1, message: 'I am learning react', likeCount: 24},
            {id: 2, message: 'Thanks Dimych', likeCount: 31},
            {id: 3, message: 'Thanks Maxim', likeCount: 635},
            {id: 4, message: 'You', likeCount: 124}
        ]*/
  
    let postsElements = props.data.map(p => <Post message={p.message} like={p.likeCount}/>)
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button> Add Post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
export default MyPosts;
