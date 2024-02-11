import { createSelector } from "reselect"
import { AppRootStateType } from "state/redux-store"

const getUsersSelector = (state: AppRootStateType) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, (users) => users)
export const getUsersPageSizeSelector = (state: AppRootStateType) => state.usersPage.pageSize
export const getTotalUsersCountSelector = (state: AppRootStateType) => state.usersPage.totalUsersCount
export const getCurrentPageSelector = (state: AppRootStateType) => state.usersPage.currentPage
export const getIsFetchingSelector = (state: AppRootStateType) => state.usersPage.isFetching
export const getFollowingInProgressSelector = (state: AppRootStateType) => state.usersPage.followingInProgress
