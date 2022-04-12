import React from 'react';
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <div>
                <Field
                    name={'newPost'}
                    placeholder={'Post message'}
                    component={Textarea}
                    validate={[required, maxLength10]}/>
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