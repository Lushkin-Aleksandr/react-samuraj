import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


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
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                        <span>Andrew</span>
                    </a>
                    <a href='' className={s.friendsItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                        <span>Sasha</span>
                    </a>
                    <a href='' className={s.friendsItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/>
                        <span>Sveta</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;