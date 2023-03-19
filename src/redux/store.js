import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profile: {
            PostsData: [
                {id: 1, message:"Hello, my name is Stanislav", likesCount: 11},
                {id: 2, message:"Hello, my name is Miron", likesCount: 121},
                {id: 3, message:"Hello, my name is Tural", likesCount: 1231}],
            currText: ""
        },
        dialogs: {
            NamesData: [
                {id: 1, name: 'Stas'},
                {id: 2, name: 'Miron'},
                {id: 3, name: 'Tural'},
                {id: 4, name: 'Misha'}],
            MessagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Yoo'},
                {id: 3, message: 'Lets go Party'},],
            currMsg: ""
        },
        navbar: {
            MyFriendsData:[
                {id:1, name:'Miron'},
                {id:2, name:'Stas'},
                {id:3, name:'Tural'},
                {id:4, name:'Misha'},
                {id:5, name:'Yulya'},
                {id:6, name:'Bib'},
                {id:7, name:'Bob'}]
        }
    },
     _callSubscriber(){
        console.log('State changed');
    },

    getState(){
        return this._state;
    },  
    subscriber(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
