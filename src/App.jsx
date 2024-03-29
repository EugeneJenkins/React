import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';

const App = (props) => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              updateNewPostText={props.updateNewPostText}
              store={props.store}
            />
          )}
        />
        <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
        <Route
          path="/music"
          render={() => <Music />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />

      </div>
    </div>
  </BrowserRouter>
);

export default App;
