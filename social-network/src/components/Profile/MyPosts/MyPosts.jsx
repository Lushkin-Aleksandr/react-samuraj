import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";


function MyPosts() {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 10}
    ]

    let postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3 className={s.headerText}>My posts</h3>
            <div className={s.addPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;