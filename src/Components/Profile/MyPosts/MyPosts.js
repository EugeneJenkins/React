import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let PostData = [
        {id: 1, message: 'Hi', likesCount: 1},
        {id: 2, message: 'How are you', likesCount: 12},
        {id: 3, message: 'i am fine, and you', likesCount: 20},
    ];

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
                <Post message={PostData[0].message} like={PostData[0].likesCount}/>
                <Post message={PostData[1].message} like={PostData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;