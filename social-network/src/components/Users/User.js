import React from "react";
import styles from "./Users.module.css";
import avatarImg from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


const User = ({user, followingInProgress, follow, unfollow, }) => {

    return (

        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            className={styles.userAvatar}
                            src={user.photos.small
                                ? user.photos.small
                                : avatarImg}
                            alt=""/>
                    </NavLink>

                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>Follow</button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status ? user.status : 'Not status'}
                    </div>
                </span>
                <span>
                    <div>
                        {'user.location.country'}
                    </div>
                    <div>
                        {'user.location.city'}
                    </div>
                </span>
            </span>
        </div>


    )
}


export default User;


