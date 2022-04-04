import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import avatarImg from '../../assets/images/avatar.png'


function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.navMenu}>
                <li className={`${s.item}`}>
                    <NavLink to="/profile" className={navData => navData.isActive ? s.active : ''}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : ''}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" className={navData => navData.isActive ? s.active : ''}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={navData => navData.isActive ? s.active : ''}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={navData => navData.isActive ? s.active : ''}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={navData => navData.isActive ? s.active : ''}>Settings</NavLink>
                </li>
            </ul>
            <div className={s.friends}>
                <p className={s.friendsHeader}>Friends</p>
                <div className={s.friendsItems}>
                    <a href='' className={s.friendsItem}>
                        <img src={avatarImg} alt=""/>
                        <span>Andrew</span>
                    </a>
                    <a href='' className={s.friendsItem}>
                        <img src={avatarImg} alt=""/>
                        <span>Sasha</span>
                    </a>
                    <a href='' className={s.friendsItem}>
                        <img src={avatarImg} alt=""/>
                        <span>Sveta</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;