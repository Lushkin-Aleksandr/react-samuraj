import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>)


    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
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
                        value={state.newMessageText}
                        placeholder={'Enter your message'}
                        onChange={updateNewMessageText}/>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;