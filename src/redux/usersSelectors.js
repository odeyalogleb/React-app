import { createSelector } from "reselect"

let getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsersData = createSelector(getUsersSelector, (users) => {
    return users.filter(item => true);
})


export let getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export let getPageSize = (state) => {
    return state.usersPage.pageSize
}
export let getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export let getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export let getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}