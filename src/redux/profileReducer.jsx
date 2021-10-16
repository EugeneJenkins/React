const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  const addPost = () => {
    const newPost = { id: 5, message: state.newPostText, likesCount: 12 };

    state.posts.push(newPost);
    state.newPostText = '';
  };

  const updateNewPostText = (newText) => {
    state.newPostText = newText;
  };

  switch (action.type) {
    case ADD_POST:
      addPost();
      return state;

    case UPDATE_NEW_POST_TEXT:
      updateNewPostText(action.newText);
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
