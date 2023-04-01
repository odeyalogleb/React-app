import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostsElements = props.data.PostsData
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />);
    

    let addNewPost = () => {
        props.addNewPost();    
    }

    let changeNewPost = (e) => {
        let currNewPostValue = e.target.value;
        props.changeNewPost(currNewPostValue);
    }
    

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.header}>
                <div>
                    <textarea onChange = {changeNewPost} value = {props.data.currText} />
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