import {ActionType, UsersDataType, UsersType} from "./State";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState: UsersDataType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
}

export const UsersReducer = (state = initialState, action: ActionType):UsersDataType  => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(user => action.userId === user.id ? {...user, followed: true} : user )}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(user => action.userId === user.id ? {...user, followed: false} : user )}
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
    }
    return state
}


export const followAC = (userId:string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId:string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users:Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_COUNT, totalUsersCount} as const)
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)