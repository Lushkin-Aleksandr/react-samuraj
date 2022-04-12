import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);



const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addMessage}>
            <Field
                className={s.addMessageTextarea}
                component={Textarea}
                validate={[required, maxLength50]}
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