const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

let initialScale = {
    PostsData: [
        {id: 1, message:"Hello, my name is Stanislav", likesCount: 11},
        {id: 2, message:"Hello, my name is Miron", likesCount: 121},
        {id: 3, message:"Hello, my name is Tural", likesCount: 1231}],
    currText: ""
    
}

const profileReducer = (state = initialScale, action) => {
    switch (action.type){
        case ADD_POST:
            let postContent = {
                id:4,
                message: state.currText,
                likesCount: 0,
            }
            if (state.currText !== ""){
                state.PostsData.push(postContent);
                state.currText = "";
            }

            return state;
            
        case CHANGE_NEW_POST:
            state.currText = action.currentText;

            return state;
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostActionCreator = (currTxt) => 
    ({type:CHANGE_NEW_POST,currentText: currTxt});

export default profileReducer;