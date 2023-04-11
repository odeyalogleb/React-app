import { connect } from "react-redux";
import { changeNewMsgActionCreator, SendMsgActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
    return {
        data: state.dialogs,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewMsg: (text) => {
            let action = changeNewMsgActionCreator(text);
            dispatch(action);
        },
        sendMsg: () => {
            let action = SendMsgActionCreator();
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;