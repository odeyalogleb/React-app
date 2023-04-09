import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
