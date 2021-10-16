import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let rerenderTree = () => {
  // console.log('rerenderTree');
};

const store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 1 },
        { id: 2, message: 'How are you', likesCount: 12 },
        { id: 3, message: 'i am fine, and you', likesCount: 20 },
      ],
      newPostText: 'Test this test',
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'i am fine, and you' },
        { id: 4, message: 'TEST4' },
        { id: 5, message: 'TOASTER 5' },
        { id: 6, message: 'THX' },
      ],
      newMessageBody: '',
      dialogs: [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' },
        { id: 6, name: 'User 6' },
      ],
    },
    sidebar: {},
  },
  getState() {
    return this.state;
  },
  callSubscriber() {
    // console.log('Subscribed');
    rerenderTree(this.state);
  },
  subscribe(observer) {
    rerenderTree = observer;
  },
  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
    this.state.sidebar = sidebarReducer(this.state.sidebar, action);

    this.callSubscriber(this.state);
  },
};

export default store;
