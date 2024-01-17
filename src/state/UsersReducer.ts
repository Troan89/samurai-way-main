import {ActionType, UsersDataType, UsersType} from "./State";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState: UsersDataType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const UsersReducer = (state = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => action.userId === user.id ? {...user, followed: true} : user)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => action.userId === user.id ? {...user, followed: false} : user)
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
    }
    return state
}


export const follow = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, totalUsersCount} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)