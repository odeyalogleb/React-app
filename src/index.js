import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) =>{
    root.render(
      <React.StrictMode>
        <App state={state} changeNewPost = {store.changeNewPost.bind(store)} 
        addPost = {store.addPost.bind(store)}
        sendMessage = {store.sendMessage.bind(store)}
        changeMsg = {store.changeMsg.bind(store)} />
      </React.StrictMode>
    );
  }

rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
