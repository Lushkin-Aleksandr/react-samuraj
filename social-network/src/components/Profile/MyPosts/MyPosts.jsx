import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import AddPost from "./AddPost";



function MyPosts(props) {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)


    return (
        <div className={s.postsBlock}>
            <h3 className={s.headerText}>My posts</h3>
            <AddPost addPost={props.addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;