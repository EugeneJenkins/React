import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <img alt={'test'} src={'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png'}/>
                {props.message}
                <div>
                    <span> <b>{props.like}</b> like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;