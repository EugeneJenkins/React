import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music"
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/music'} component={Music} />
                    <Route path={'/news'} component={News} />
                    <Route path={'/settings'} component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
