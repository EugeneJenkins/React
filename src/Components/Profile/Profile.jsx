import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <div>
    <ProfileInfo />
    <MyPosts
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      store={props.store}
      updateNewPostText={props.updateNewPostText}
    />
  </div>
);

export default Profile;
