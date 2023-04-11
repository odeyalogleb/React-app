import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { changeNewMsgActionCreator, SendMsgActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
    return {
        data: state.dialogs,
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

let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer;