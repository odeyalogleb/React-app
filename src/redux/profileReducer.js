const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST){
        let postContent = {
            id:4,
            message: state.currText,
            likesCount: 0,
        }
        if (state.currText !== ""){
            state.PostsData.push(postContent);
            state.currText = "";
        }
    } else if (action.type === CHANGE_NEW_POST){
        state.currText = action.currentText;
    }

    return state;
}

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostActionCreator = (currTxt) => 
    ({type:CHANGE_NEW_POST,currentText: currTxt});

export default profileReducer;