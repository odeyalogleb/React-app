import { changeNewMsgActionCreator, SendMsgActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {

    let changeNewMsg = (text) => {
        let action = changeNewMsgActionCreator(text);
        props.dispatch(action);
    }

    let sendMsg = () => {
        let action = SendMsgActionCreator();
        props.dispatch(action);
    }
    return <Dialogs data = {props.data}
    changeNewMsg = {changeNewMsg}
    sendMsg = {sendMsg}
     />
}

export default DialogsContainer;