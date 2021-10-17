const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  function sendMessage() {
    state.messagesData.push({ id: 7, message: state.newMessageBody });
    state.newMessageBody = '';
  }

  function updateNewMessageBody() {
    state.newMessageBody = action.body;
  }

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      updateNewMessageBody();
      return state;

    case SEND_MESSAGE:
      sendMessage();
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body });

export default dialogsReducer;
