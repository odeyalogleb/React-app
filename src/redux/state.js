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
    getState(){
        return this._state;
    },  
    _rerenderEntireTree(){
        console.log('State changed');
    },
    
    subscriber(observer){
        this._rerenderEntireTree = observer;
    },
    addPost(){
        let postContent = {
            id:4,
            message: this._state.profile.currText,
            likesCount: 0,
        }

        if (this._state.profile.currText !== ""){
            this._state.profile.PostsData.push(postContent);
            this._rerenderEntireTree(this._state);
            this._state.profile.currText = "";
        }
    },
    sendMessage () {
        let msgContent = {
            id: 4,
            message: this._state.dialogs.currMsg
        }

        if (this._state.dialogs.currMsg !== ""){
            this._state.dialogs.MessagesData.push(msgContent);
            this._state.dialogs.currMsg = "";
            this._rerenderEntireTree(this._state);
        }
    },
    changeNewPost(currentText){
        this._state.profile.currText = currentText;
        this._rerenderEntireTree(this._state);
    },
    changeMsg(currentMessage) {
        this._state.dialogs.currMsg = currentMessage;
        this._rerenderEntireTree(this._state);
    },
}

export default store;
