import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let PostsData = [
  {id: 1, message:"Hello, my name is Stanislav", likesCount: 11},
  {id: 2, message:"Hello, my name is Miron", likesCount: 121},
  {id: 3, message:"Hello, my name is Tural", likesCount: 1231},
];

let NamesData = [
  {id: 1, name: 'Stas'},
  {id: 2, name: 'Miron'},
  {id: 3, name: 'Tural'},
  {id: 4, name: 'Misha'},
];

let MessagesData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Yoo'},
  {id: 3, message: 'Lets go Party'},
];

root.render(
  <React.StrictMode>
    <App data = {PostsData} NamesData = {NamesData} MessagesData = {MessagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
