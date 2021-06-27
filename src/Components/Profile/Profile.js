import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={classes.content}>
                <div> <img src='https://www.nastol.com.ua/pic/201803/2560x1440/nastol.com.ua-277274.jpg'/></div>
                <div> ava + desc </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;