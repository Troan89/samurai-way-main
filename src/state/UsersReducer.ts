import {ActionType, UsersDataType, UsersType} from "./State";
import {Dispatch} from "redux";
import {usersApi} from "api/users-api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState: UsersDataType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const UsersReducer = (state = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => action.userId === user.id ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => action.userId === user.id ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
    }
    return state
}

//action
export const follow = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, totalUsersCount} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const setIsFollowingProgress = (followingInProgress: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
} as const)

//thunk
export const getUsers = (page: number, pageSize: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(page))

    usersApi.fetchUsers(page, pageSize)
        .then((res) => {
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
            dispatch(setIsFetching(false))
        })
}
export const unfollowUser = (userId:string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setIsFollowingProgress(true, userId))
    usersApi.unfollowUser(userId)
        .then(res=>{
            if (res.data.resultCode === 0) dispatch(unfollow(userId))
            dispatch(setIsFollowingProgress(false, userId))
        })
}
export const followUser = (userId:string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setIsFollowingProgress(true, userId))
    usersApi.followUser(userId)
        .then(res=>{
            if (res.data.resultCode === 0) dispatch(follow(userId))
            dispatch(setIsFollowingProgress(false, userId))
        })
}