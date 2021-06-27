import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <img src={'https://lh3.googleusercontent.com/proxy/za83gPnTAG14lXKEAmydctofEffgRM4pcUR8aO2GBDvgAuveiVW9uKsVOWB44bJvSxU-wGfCVeVQ511AtsZ1AjO3X5dHLYMpsaTjSJqWjQhphSzOt5ix'}/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;