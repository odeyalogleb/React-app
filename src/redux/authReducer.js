 import { stopSubmit } from "redux-form";
import { HeaderAPI } from "../api/api";

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
            }
            return stateCopy
        }
        default:
            return state;
    }
}

export const setUserData = (id, login, email, isAuth) => ({type:SET_USER_DATA, data: {id, login, email, isAuth}});

export const authMe = () => {
    return (dispatch) => {
        HeaderAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id,email, login, true));
            }
            
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        HeaderAPI.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0){
                dispatch(authMe())
            } else {
                let errorData = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: errorData}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        HeaderAPI.logout().then(data => {
            if (data.resultCode === 0){
                dispatch(setUserData(null,null,null,false))
            }
        })
    }
}

export default authReducer;