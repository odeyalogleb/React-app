import { connect } from "react-redux";
import {
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFollowing, getUsers, getUsers2,
    followThunk, unfollowThunk
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsers2(p, this.props.pageSize)
    }


    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader /> : null}
                <Users users={this.props.users}
                    isFollowing={this.props.isFollowing}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unfollowThunk={this.props.unfollowThunk}
                    followThunk={this.props.followThunk}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing

    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/
let UserContEnd =  compose(
    connect(mapStateToProps,
        {
            setCurrentPage, setTotalUsersCount, setUsers,
            toggleIsFollowing, getUsers, getUsers2, followThunk, unfollowThunk
        }),
    WithAuthRedirect
)(UsersContainer);


export default UserContEnd;