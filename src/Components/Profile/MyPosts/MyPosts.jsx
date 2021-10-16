import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
  const state = props.store.getState().profilePage;
  const postElements = state.posts.map((post) => <Post message={post.message} like={post.likesCount} />);
  const newPostElement = React.createRef();
  const addPost = () => { props.store.dispatch(addPostActionCreator()); };
  const onPostChange = () => { props.store.dispatch(updateNewPostActionCreator(newPostElement.current.value)); };

  return (
    <div className={classes.postsBlock}>
      <div>
        <h3> my posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.store.newPostText} />
          </div>
          <div>
            <button
              type="button"
              onClick={addPost}
            >
              Add Post
            </button>
          </div>
        </div>
      </div>
      <div className={classes.posts}>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
