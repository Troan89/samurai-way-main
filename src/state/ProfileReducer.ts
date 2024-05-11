import {ActionType, ProfilePageType} from "./State"
import {UserProfile_T} from "../Components/Profile/ProfileContainer"
import {Dispatch} from "redux"
import {ProfileApi} from "../api/profile-api"
import {usersApi} from "../api/users-api"
import {AppThunkDispatch} from "./redux-store";

let ADD_POST = "PROFILE/ADD-POST" as const
let DELETE_POST = "PROFILE/DELETE_POST" as const
let SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE" as const
let SET_PROFILE = "PROFILE/SET_PROFILE" as const
let SET_STATUS = "PROFILE/SET_STATUS" as const
let SET_PHOTO = "PROFILE/SET_PHOTO" as const
let INCREMENT_LIKE = "PROFILE/INCREMENT_LIKE" as const
let DECREMENT_LIKE = "PROFILE/DECREMENT_LIKE" as const

const initialState: ProfilePageType = {
    postsData: [
        {id: "1", message: "Hi, people", like: 14},
        {id: "2", message: "Bye, people", like: 1},
        {id: "3", message: "Yo", like: 0},
    ],
    profile: null,
    status: "",
}

export const ProfileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [{id: "4", message: action.postText, like: 0}, ...state.postsData]}
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter((post) => post.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.userProfile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PHOTO:
            return {...state, profile: {...state.profile, ...action.userProfile}}
        case INCREMENT_LIKE:
             return {
                ...state, postsData: state.postsData.map((post) =>
                    post.id === action.postId ? {...post, like: post.like + 1 } : post
                )
            }
        case DECREMENT_LIKE:
            return {
                ...state, postsData: state.postsData.map((post) =>
                    post.id === action.postId ? {...post, like: post.like - 1 } : post
                )
            }
        default:
            return state
    }
}

//action
export const addPost = (postText: string) => ({type: ADD_POST, postText}) as const
export const deletePost = (postId: string) => ({type: DELETE_POST, postId}) as const
export const setUserProfile = (userProfile: UserProfile_T) => ({type: SET_USER_PROFILE, userProfile}) as const
export const setUserStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const setPhoto = (userProfile: UserProfile_T) => ({type: SET_PHOTO, userProfile}) as const
export const incrementLike = (postId: string) => ({type: INCREMENT_LIKE, postId}) as const
export const decrementLike = (postId: string) => ({type: DECREMENT_LIKE, postId}) as const

//thunk
export const setUserInfo = (userId: string) => async (dispatch: Dispatch) => {
    const res = await ProfileApi.getUserInfo(userId)
    dispatch(setUserProfile(res.data))
}
export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    const res = await usersApi.getStatus(userId)
    dispatch(setUserStatus(res.data))

}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await usersApi.updateStatus(status)
    dispatch(setUserStatus(status))
}
export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    const res = await usersApi.savePhoto(photo)
    dispatch(setPhoto(res.data.data))
}

export const saveProfile = (profile: SaveProfileServer) => async (dispatch: AppThunkDispatch, getState: any) => {
    // @ts-ignore
    const userId = getState().auth.id
    const res = await ProfileApi.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(setUserInfo(userId))
    } else {
        return Promise.reject(res.data.messages)
    }

}

export type SaveProfileServer = Omit<UserProfile_T, 'userId' | 'photos'>

