import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>);
}

const Message = (props) => {
    return <div className={classes.message}> {props.massage}</div>;
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                <DialogItem name={'User1'} id={'1'}/>
                <DialogItem name={'User2'} id={'2'}/>
                <DialogItem name={'User3'} id={'3'}/>
                <DialogItem name={'User4'} id={'4'}/>

            </div>

            <div className={classes.messages}>
                <Message massage={'Hi'}/>
                <Message massage={'How are you'}/>
                <Message massage={'i am fine, and you'}/>
            </div>
        </div>
    );
}

export default Dialogs;