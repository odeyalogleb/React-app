const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialScale = {
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
}

const dialogsReducer = (state = initialScale, action) => {

    switch( action.type){
        case SEND_MESSAGE:
            let msgContent = {
                id: 4,
                message: state.currMsg
            }
    
            if (state.currMsg !== ""){
                state.MessagesData.push(msgContent);
                state.currMsg = "";
            }

            return state;

        case CHANGE_MESSAGE:
            state.currMsg = action.currentMessage;

            return state;

        default:
            return state;
    }
}

export const SendMsgActionCreator = () => ({type: SEND_MESSAGE});
export const changeNewMsgActionCreator = (currMsg) => 
    ({type: CHANGE_MESSAGE, currentMessage: currMsg});
    
export default dialogsReducer;