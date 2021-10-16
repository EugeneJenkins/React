import React from 'react';
import classes from './friends.module.css';

const FriendsNav = () => (
  <div className={classes.row}>
    <div className={classes.friendsText}>Friends</div>
    <div>
      <ul>
        <li>Friend 1</li>
        <li>Friend 2</li>
        <li>Friend 3</li>
      </ul>
    </div>
  </div>
);

export default FriendsNav;
