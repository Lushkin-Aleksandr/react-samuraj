import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";



function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)


    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.postsBlock}>
            <h3 className={s.headerText}>My posts</h3>
            <div className={s.addPost}>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;