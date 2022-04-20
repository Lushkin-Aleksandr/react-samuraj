import React from "react";
import styles from './ProfileInfo.module.css';
import avatarImage from '../../../assets/images/avatar.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large || avatarImage}/>
                <div>
                    <p className={styles.fullName}>{profile.fullName}</p>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;