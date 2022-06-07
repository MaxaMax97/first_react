import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return <div>
      My post
      <div>
        <textarea placeholder="input text" ></textarea>
        <input type="button" value='add post' />
      </div>
      <div className="post">
       <Post message="Я учу реакт" like='24'/>
       <Post message="Спасибо  Димыч" like='14' />
      

      </div>
    </div>
  ;
};

export default MyPosts;
