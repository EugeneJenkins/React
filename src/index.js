import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
    {id: 1, message: 'Hi', likesCount: 1},
    {id: 2, message: 'How are you', likesCount: 12},
    {id: 3, message: 'i am fine, and you', likesCount: 20},
];

let dialogData = [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
    {id: 6, name: 'User 6'},
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'i am fine, and you'},
    {id: 4, message: 'TEST4'},
    {id: 5, message: 'TOASTER 5'},
    {id: 6, message: 'THX'},
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={PostsData} dialogData={dialogData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
