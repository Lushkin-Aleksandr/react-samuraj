import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom';
import AddMessage from "./AddMessage";


const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(message => <Message message={message.message}/>)

    // Редирект на страницу логина если не авторизован
    if (!props.isAuth) return <Navigate to={'/login'}/>


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messageWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessage addMessage={props.addMessage}/>
            </div>
        </div>
    )
}




export default Dialogs;