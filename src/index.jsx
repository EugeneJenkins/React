import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state';
import App from './App';
import './index.css';

const rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);
