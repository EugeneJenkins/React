import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let PostsData = [
        {id: 1, message: 'Hi', likesCount: 1},
        {id: 2, message: 'How are you', likesCount: 12},
        {id: 3, message: 'i am fine, and you', likesCount: 20},
    ];

    let postElements = PostsData.map(post => <Post message={post.message} like={post.likesCount}/>);

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