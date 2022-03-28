import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>)

    let addMessageTextarea = React.createRef();
    let updateNewMessageText = () => {
        let text = addMessageTextarea.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messageWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.addMessage}>
                    <textarea
                        ref={addMessageTextarea}
                        value={props.dialogsPage.newMessageText}
                        onChange={updateNewMessageText}/>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;