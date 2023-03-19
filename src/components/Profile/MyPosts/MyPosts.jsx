import React from 'react';
import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {
    let PostsElements = props.data.PostsData
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />);
    
    let NewPostText = React.createRef();

    let addNewPost = () => {
        let action = addNewPostActionCreator();
        props.dispatch(action);    
    }

    let changeNewPost = () => {
        let currNewPostValue = NewPostText.current.value;
        let action = changeNewPostActionCreator(currNewPostValue);
        props.dispatch(action);
    }
    

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.header}>
                <div>
                    <textarea ref = {NewPostText}  onChange = {changeNewPost} value = {props.data.currText} />
                </div>
                <div>
                    <button onClick={addNewPost} >Add Post</button>
                </div>
            </div>
            <div className={classes.content}>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;