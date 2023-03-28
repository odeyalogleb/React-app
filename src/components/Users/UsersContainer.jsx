import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage

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
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);