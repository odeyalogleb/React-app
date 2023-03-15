let state = {
    profile: {
        PostsData: [
            {id: 1, message:"Hello, my name is Stanislav", likesCount: 11},
            {id: 2, message:"Hello, my name is Miron", likesCount: 121},
            {id: 3, message:"Hello, my name is Tural", likesCount: 1231}]
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
            {id: 3, message: 'Lets go Party'},]
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

}

export let addPost = (postText) => {
    let postContent = {
        id: 4,
        message: postText,
        likesCount: 0,
    }
    state.profile.PostsData.push(postContent);
}

export let sendMessage = (msgText) => {
    let msgContent = {
        id: 4,
        message: msgText
    }
    state.dialogs.MessagesData.push(msgContent);
}

export default state;
