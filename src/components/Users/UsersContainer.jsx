import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) =>{
            let action = followAC(id);
            dispatch(action);
        },
        unfollow: (id) => {
            let action = unFollowAC(id);
            dispatch(action);
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);