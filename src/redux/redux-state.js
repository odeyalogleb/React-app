import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
})

let store = legacy_createStore(reducers);

export default store;
