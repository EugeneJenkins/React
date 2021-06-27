import React from "react";
import classes from "./MyPosts.module.css";

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

            <div className={classes.post}>
                <div className={classes.item}>
                    <img src={'https://lh3.googleusercontent.com/proxy/za83gPnTAG14lXKEAmydctofEffgRM4pcUR8aO2GBDvgAuveiVW9uKsVOWB44bJvSxU-wGfCVeVQ511AtsZ1AjO3X5dHLYMpsaTjSJqWjQhphSzOt5ix'}/>
                    post 1
                </div>
                <div className={classes.item} > post 2 </div>
            </div>
        </div>
    );
}

export default MyPosts;