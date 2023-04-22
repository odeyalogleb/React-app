import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const addNewPost = (values) => {
        props.addNewPost(values.newPostText);
    }
    let PostsElements = props.data.PostsData
        .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div>
            <h2>My posts</h2>

            <ProfileReduxForm
                value={props.data.currText} onSubmit={addNewPost} />

            <div className={classes.content}>
                {PostsElements}
            </div>
        </div>
    );
}



const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.header}>
            <div>
                <Field name={"newPostText"} component={"textarea"} value={props.value}/>
            </div>
            <div>
                <button type='submit'>Add Post</button>
            </div>
        </form>
    )
}

const ProfileReduxForm = reduxForm({ form: 'profile' })(ProfileForm)

export default MyPosts;