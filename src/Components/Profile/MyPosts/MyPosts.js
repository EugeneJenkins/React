import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>);

    const addPost = () => {
        props.dispatch({
            type: "ADD-POST"
        })

        let text = newPostElement.current.value;
    }

    let onPostChange = () => {

        props.dispatch({
            type: "UPDATE-NEW-POST-TEXT",
            newText: newPostElement.current.value
        })
    }

    const newPostElement = React.createRef();

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3> my posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button
                            onClick={addPost}>
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
}

export default MyPosts;