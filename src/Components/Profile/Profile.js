import React from "react";
// import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo src={'1'}/>
                <MyPosts/>
            </div>
        );
    }
}


export default Profile;