import React from 'react';
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <div>
                <Field name={'newPost'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'addPostForm'})(AddPostForm)

const AddPost = (props) => {
    const addNewPost = (formData) => {
        props.addPost(formData.newPost);
    }
    return (
        <AddPostFormRedux onSubmit={addNewPost}/>
    );
};

export default AddPost;