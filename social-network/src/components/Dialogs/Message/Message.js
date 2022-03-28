import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {

    return (
        <div className={s.message}>
            <div className={s.messageInner}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;