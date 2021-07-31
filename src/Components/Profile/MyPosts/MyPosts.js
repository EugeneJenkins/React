import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>);

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3> my posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
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