import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let PostsElements = props.data.PostsData
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />);
    
    let NewPostText = React.createRef();


    let NewPostChange = () => {
        let NewPostCurrValue = NewPostText.current.value;
        props.changeMessage(NewPostCurrValue);
        NewPostText.current.value = props.data.currMsg;
    }

    let NewPostAlert = () => {
        let NewPostValue = NewPostText.current.value;
        props.addPost(NewPostValue);
        NewPostText.current.value = "";
    }
    

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.header}>
                <div>
                    <textarea ref = {NewPostText} onChange = {NewPostChange}></textarea>
                </div>
                <div>
                    <button onClick={NewPostAlert} >Add Post</button>
                </div>
            </div>
            <div className={classes.content}>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;