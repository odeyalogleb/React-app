import { connect } from 'react-redux';
import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        data: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost :() => {
            let action = addNewPostActionCreator();
            dispatch(action);    
        },
        changeNewPost: (text) => {
            let action = changeNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;