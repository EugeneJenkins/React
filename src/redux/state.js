let rerenderTree = () => {
    console.log('rerenderTree')
}
const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

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
    _callSubscribe() {
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
        if (action.type === "ADD-POST") {
            this._addPost()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._updateNewPostText(action.newText)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: addPost
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
}

export default store