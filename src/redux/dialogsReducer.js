const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    NamesData: [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Miron' },
        { id: 3, name: 'Tural' },
        { id: 4, name: 'Misha' }],
    MessagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Yoo' },
        { id: 3, message: 'Lets go Party' },],
    currMsg: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            {
                let msgContent = {
                    id: 4,
                    message: state.currMsg
                }

                let stateCopy = { ...state };
                stateCopy.MessagesData = [...state.MessagesData];

                if (stateCopy.currMsg !== "") {
                    stateCopy.MessagesData.push(msgContent);
                    stateCopy.currMsg = "";
                }

                return stateCopy;
            }
        case CHANGE_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.currMsg = action.currentMessage;
            return stateCopy;
        }

        default:
            return state;
    }
}

export const SendMsgActionCreator = () => ({ type: SEND_MESSAGE });
export const changeNewMsgActionCreator = (currMsg) =>
    ({ type: CHANGE_MESSAGE, currentMessage: currMsg });

export default dialogsReducer;