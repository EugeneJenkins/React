import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import FriendsNav from './Friends/friendsNav';

const Nav = () => (
  <nav className={classes.nav}>
    <div className={`${classes.item} ${classes.active}`}><NavLink to="/profile">Profile</NavLink></div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to="/dialogs">Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to="/news">News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to="/music">Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to="/settings">settings</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to="/friends"><FriendsNav /></NavLink>
    </div>
  </nav>
);

export default Nav;
