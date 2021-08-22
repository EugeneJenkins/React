import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';


const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());
store.subscribe(rerenderTree)