import { UsersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING";


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 13,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return { ...u };
                })
            };
            return stateCopy;
        }

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return { ...u };
                })
            };

            return stateCopy;
        }

        case SET_USERS: {
            let stateCopy = {
                ...state,
                users: action.users
            };

            return stateCopy;
        }

        case SET_TOTAL_USERS_COUNT: {
            let stateCopy = {
                ...state,
                totalUsersCount: action.count
            }

            return stateCopy;
        }

        case SET_CURRENT_PAGE: {
            let stateCopy = {
                ...state,
                currentPage: action.currentPage
            }

            return stateCopy;
        }

        case TOGGLE_IS_FETCHING: {
            let stateCopy = {
                ...state,
                isFetching: action.isFetching
            }

            return stateCopy;
        }
        case TOGGLE_IS_FOLLOWING: {
            let stateCopy = {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)


            }
            return stateCopy
        }


        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowing = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}


// with serCurrentPage
export const getUsers2 = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        UsersAPI.followDelete(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(userId));
            }
            dispatch(toggleIsFollowing(false, userId));

        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        UsersAPI.followPost(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toggleIsFollowing(false, userId));
        })
    }
}


export default usersReducer;