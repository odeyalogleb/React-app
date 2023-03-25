import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer
})

let store = legacy_createStore(reducers);

window.store = store;
export default store;
