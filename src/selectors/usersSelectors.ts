import { createSelector } from "reselect"
import { AppRootStateType } from "state/redux-store"

const getUsers = (state: AppRootStateType) => {
  debugger
  return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers, (users) => users)
export const getUsersPageSizeSelector = (state: AppRootStateType) => state.usersPage.pageSize
export const getTotalUsersCountSelector = (state: AppRootStateType) => state.usersPage.totalUsersCount
export const getCurrentPageSelector = (state: AppRootStateType) => state.usersPage.currentPage
export const getIsFetchingSelector = (state: AppRootStateType) => state.usersPage.isFetching
export const getFollowingInProgressSelector = (state: AppRootStateType) => state.usersPage.followingInProgress
