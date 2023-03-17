import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    debugger;
    let PostsElements = props.data.PostsData
        .map(p => <Post message={p.message} likesCount = {p.likesCount} />);
    
    let NewPostText = React.createRef();

    let NewPostAlert = () => {
        props.addPost();    
    }

    let changeNewPost = () => {
        let currNewPostValue = NewPostText.current.value;
        props.changeNewPost(currNewPostValue);
        console.log(currNewPostValue);
        
    }
    

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.header}>
                <div>
                    <textarea ref = {NewPostText}  onChange = {changeNewPost} value = {props.data.currText} />
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