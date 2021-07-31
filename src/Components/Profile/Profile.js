import React from "react";
// import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo src={'1'}/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}


export default Profile;