const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: {
            let stateCopy = {
                ...state,
                ...action.data,
                isAuth: true
            }
            return stateCopy
        }
        default:
            return state;
    }
}

export const setUserData = (id, login, email) => ({type:SET_USER_DATA, data: {id, login, email}});

export default authReducer;