import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';


const rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(state);

subscribe(rerenderTree)