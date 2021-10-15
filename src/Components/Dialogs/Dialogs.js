import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {newMessageBodyCreator, sendMessageCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messagesData.map(message => <Message massage={message.message}/>);
    let newMessageTxt = state.newMsgText;

    const sendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageText = (e) => {
        let body = e.target.value;
        props.store.dispatch(newMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageTxt}
                            placeholder={'Enter your message'}
                            onChange={onNewMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={sendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;