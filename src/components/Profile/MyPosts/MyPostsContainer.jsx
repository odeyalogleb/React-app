import React from 'react';
import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let addNewPost = () => {
        let action = addNewPostActionCreator();
        props.dispatch(action);    
    }

    let changeNewPost = (text) => {
        let action = changeNewPostActionCreator(text);
        props.dispatch(action);
    }
    

    return <MyPosts addNewPost = {addNewPost} 
    changeNewPost = {changeNewPost} 
    data = {props.data.profile} />
}

export default MyPostsContainer;