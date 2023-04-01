const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
    users:[],
    totalUsersCount: 0,
    pageSize: 13,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return {...u};
                })
            };
            return stateCopy;
        }
        
        case UNFOLLOW:{
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return {...u};
                })
            };

            return stateCopy;
        }

        case SET_USERS: {
            let stateCopy = {
                ...state,
                users:action.users
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


        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetchingAC = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;