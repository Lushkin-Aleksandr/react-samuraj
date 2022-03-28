import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${s.dialog}`}>

            <NavLink to={path} className={navData => navData.isActive ? `${s.active} ${s.link}` : s.link}>
                <img className={s.avatar} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;