const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        if (action.type === 'ADD-POST'){
            let postContent = {
                id:4,
                message: this._state.profile.currText,
                likesCount: 0,
            }
    
            if (this._state.profile.currText !== ""){
                this._state.profile.PostsData.push(postContent);
                this._callSubscriber(this._state);
                this._state.profile.currText = "";
            }
        } else if (action.type === 'SEND-MESSAGE'){
            let msgContent = {
                id: 4,
                message: this._state.dialogs.currMsg
            }
    
            if (this._state.dialogs.currMsg !== ""){
                this._state.dialogs.MessagesData.push(msgContent);
                this._state.dialogs.currMsg = "";
                this._callSubscriber(this._state);
            }
        } else if (action.type === 'CHANGE-NEW-POST'){
            this._state.profile.currText = action.currentText;
            this._callSubscriber(this._state);
        } else if (action.type === 'CHANGE-MESSAGE'){
            this._state.dialogs.currMsg = action.currentMessage;
            this._callSubscriber(this._state);
        }
    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostActionCreator = (currTxt) => 
    ({type:CHANGE_NEW_POST,currentText: currTxt});

export const SendMsgActionCreator = () => ({type: SEND_MESSAGE});
export const changeNewMsgActionCreator = (currMsg) => 
    ({type: CHANGE_MESSAGE, currentMessage: currMsg});

export default store;
