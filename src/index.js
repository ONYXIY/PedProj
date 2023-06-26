import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App State={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>
    </React.StrictMode>

  );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});



