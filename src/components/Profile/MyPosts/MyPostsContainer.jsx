import React from 'react';
import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
    

    return (
        <StoreContext.Consumer>
        {(store) => {
            let addNewPost = () => {
                let action = addNewPostActionCreator();
                store.dispatch(action);    
            }
        
            let changeNewPost = (text) => {
                let action = changeNewPostActionCreator(text);
                store.dispatch(action);
            }
            
            return <MyPosts addNewPost = {addNewPost} 
            changeNewPost = {changeNewPost} 
            data = {store.getState().profile} />
        }
        }
    </StoreContext.Consumer>

    )

    
    
    
}

export default MyPostsContainer;