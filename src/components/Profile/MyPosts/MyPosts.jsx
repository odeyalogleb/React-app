import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    let PostsElements = props.data
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />);
    
    let NewPostText = React.createRef();

    let NewPostAlert = () => {
        let NewPostValue = NewPostText.current.value;
        props.addPost(NewPostValue);
    }

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.header}>
                <div>
                    <textarea ref = {NewPostText}></textarea>
                </div>
                <div>
                    <button onClick={NewPostAlert}>Add Post</button>
                </div>
            </div>
            <div className={classes.content}>
                {PostsElements}
            </div>
        </div>
    );
}

export default MyPosts;