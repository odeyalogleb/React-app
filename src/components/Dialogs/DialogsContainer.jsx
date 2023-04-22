import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { SendMsgActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
    return {
        data: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (msgText) => {
            let action = SendMsgActionCreator(msgText);
            dispatch(action);
        }
    }
}

let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer;