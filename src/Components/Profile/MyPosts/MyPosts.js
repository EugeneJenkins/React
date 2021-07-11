import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message={'aaasdasdas'} like={'1'}/>
                <Post message={'My new post'} like={'23'}/>
            </div>
        </div>
    );
}

export default MyPosts;