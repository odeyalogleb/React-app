const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === 'SEND-MESSAGE'){
        let msgContent = {
            id: 4,
            message: state.currMsg
        }

        if (state.currMsg !== ""){
            state.MessagesData.push(msgContent);
            state.currMsg = "";
        }
    } else if (action.type === 'CHANGE-MESSAGE'){
        state.currMsg = action.currentMessage;
    }

    return state;
}

export const SendMsgActionCreator = () => ({type: SEND_MESSAGE});
export const changeNewMsgActionCreator = (currMsg) => 
    ({type: CHANGE_MESSAGE, currentMessage: currMsg});
    
export default dialogsReducer;