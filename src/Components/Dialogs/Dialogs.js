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

    let dialogData = [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'},
        {id: 4, name: 'User 4'},
        {id: 5, name: 'User 5'},
        {id: 6, name: 'User 6'},
    ];

    let MessagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'i am fine, and you'},
        {id: 4, message: 'TEST4'},
        {id: 5, message: 'TOASTER 5'},
        {id: 6, message: 'THX'},
    ];

    let dialogsElements = dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = MessagesData.map(message => <Message massage={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;