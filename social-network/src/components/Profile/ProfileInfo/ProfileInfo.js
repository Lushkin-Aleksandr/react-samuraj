import React from "react";
import styles from './ProfileInfo.module.css';
import avatarImage from '../../../assets/images/avatar.png'

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img className={styles.wallpaperImg}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large || avatarImage}/>
                <div>
                    <p className={styles.fullName}>{props.profile.fullName}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;