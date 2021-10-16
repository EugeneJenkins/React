let rerenderTree = () => {
    console.log('rerenderTree')
}
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 1},
                {id: 2, message: 'How are you', likesCount: 12},
                {id: 3, message: 'i am fine, and you', likesCount: 20},
            ],
            newPostText: "Test this test"
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'i am fine, and you'},
                {id: 4, message: 'TEST4'},
                {id: 5, message: 'TOASTER 5'},
                {id: 6, message: 'THX'},
            ],
            newMessageBody:"",
            dialogs: [
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'},
                {id: 4, name: 'User 4'},
                {id: 5, name: 'User 5'},
                {id: 6, name: 'User 6'},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log(1)
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 12
        };

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        rerenderTree(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        rerenderTree(this._state);
    },
    subscribe(observer) {
        rerenderTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            console.log(body)
            this._state.dialogsPage.messagesData.push({id: 7, message: body});
            this._state.dialogsPage.newMessageBody = "";
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store