import { UsersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    PostsData: [
        { id: 1, message: "Hello, my name is Stanislav", likesCount: 11 },
        { id: 2, message: "Hello, my name is Miron", likesCount: 121 },
        { id: 3, message: "Hello, my name is Tural", likesCount: 1231 }
    ],
    currText: "",
    profile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let postContent = {
                    id: 4,
                    message: state.currText,
                    likesCount: 0,
                }
                
                let stateCopy = {...state};
                stateCopy.PostsData = [...state.PostsData];

                if (stateCopy.currText !== "") {
                    stateCopy.PostsData.push(postContent);
                    stateCopy.currText = "";
                }

                return stateCopy;
            }

        case CHANGE_NEW_POST:{
            let stateCopy = {...state}
            stateCopy.currText = action.currentText;
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            let stateCopy = {
                ...state,
                profile: action.profile
            }
            return stateCopy
        }

            
        default:
            return state;
    }
}

export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const changeNewPostActionCreator = (currTxt) =>
    ({ type: CHANGE_NEW_POST, currentText: currTxt });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        UsersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer;