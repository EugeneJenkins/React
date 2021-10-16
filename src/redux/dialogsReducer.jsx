const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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
