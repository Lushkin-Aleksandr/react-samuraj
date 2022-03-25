import s from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${s.dialog}`}>
            <NavLink to={path} className={navData => navData.isActive ? s.active : ''}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych' },
        {id: 2, name: 'Andrey' },
        {id: 3, name: 'Sveta' },
        {id: 4, name: 'Sasha' },
        {id: 5, name: 'Valera' }
    ];

    let messagesData = [
        {id: 1, message: 'Hi' },
        {id: 2, message: 'How are you' },
        {id: 3, message: 'oaoaoaoao' }
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;