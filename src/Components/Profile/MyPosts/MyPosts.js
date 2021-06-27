import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove test</button>
                </div>
            </div>
            <Post message = {'aaasdasdas'} like = {'1'} />
            <Post message = {'My new post'} like = {'23'} />
        </div>
    );
}

export default MyPosts;