import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addMessage}>
            <Field
                component={'textarea'}
                name={'newMessageText'}
                placeholder={'Enter your message'}/>
            <button>Add message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

const AddMessage = (props) => {
    let addNewMessage = (formData) => {
        props.addMessage(formData.newMessageText)
    }
    return (
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    )
}

export default AddMessage;