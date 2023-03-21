import StoreContext from "../../../StoreContext"
import Friends from "./Friends";

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer >
        {(store) => {
            return <Friends data = {store.getState().navbar} />
        }

        }
    </StoreContext.Consumer>

    )
    
}

export default FriendsContainer;