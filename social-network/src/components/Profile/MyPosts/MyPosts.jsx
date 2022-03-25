import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";


function MyPosts() {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 10}
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;