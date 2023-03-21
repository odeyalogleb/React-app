import { changeNewMsgActionCreator, SendMsgActionCreator } from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs"

const DialogsContainer = () => {

    

    return (<StoreContext.Consumer>
        { (store) => {
            let changeNewMsg = (text) => {
                let action = changeNewMsgActionCreator(text);
                store.dispatch(action);
            }
        
            let sendMsg = () => {
                let action = SendMsgActionCreator();
                store.dispatch(action);
            }

            return <Dialogs data = {store.getState().dialogs}
            changeNewMsg = {changeNewMsg}
            sendMsg = {sendMsg}
            />

        }
    }
    </StoreContext.Consumer>
    )
    
}

export default DialogsContainer;