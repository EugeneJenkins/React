import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to = '/dialogs/1'> User1</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to = '/dialogs/2'> User2</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to = '/dialogs/3'> User3</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to = '/dialogs/4'> User4</NavLink>
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}> Hi</div>
                <div className={classes.message}> How are you</div>
                <div className={classes.message}> i am fine, and you</div>
            </div>
        </div>
    );
}

export default Dialogs;