import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state, { addPost, changeMessage, sendMessage } from './redux/state';

rerenderEntireTree(state, addPost, sendMessage, changeMessage);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
