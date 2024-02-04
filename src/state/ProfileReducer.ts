import {ActionType, ProfilePageType} from "./State";
import {UserProfile_T} from "../Components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {ProfileApi} from "../api/profile-api";
import {usersApi} from "../api/users-api";

let ADD_POST = 'ADD-POST' as const
let SET_USER_PROFILE = 'SET_USER_PROFILE' as const
let SET_STATUS = 'SET_STATUS' as const

const initialState: ProfilePageType = {
    postsData: [
        {id: "1", message: 'Hi, people', like: 14},
        {id: "2", message: 'Bye, people', like: 1},
        {id: "3", message: 'Yo', like: 0},
    ],
    profile: null,
    status: ""
}

export const ProfileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [{id: "4", message: action.postText, like: 0}, ...state.postsData]}
        case SET_USER_PROFILE:
            return {...state, profile: action.userProfile}
        case "SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

//action
export const addPost = (postText: string) => ({type: ADD_POST, postText} as const)
export const setUserProfile = (userProfile: UserProfile_T) => ({type: SET_USER_PROFILE, userProfile} as const)
export const setUserStatus = (status:string) => ({type: SET_STATUS, status} as const)

//thunk
export const setUserInfo = (userId:string) => (dispatch: Dispatch) => {
    debugger
    ProfileApi.getUserInfo(userId)
        .then((res) => {
            dispatch(setUserProfile(res.data))
        })
}
export const getUserStatus = (userId:string) => (dispatch: Dispatch) => {
    usersApi.getStatus(userId)
        .then((res) => {
            dispatch(setUserStatus(res.data))
        })
}
export const updateUserStatus = (status:string) => (dispatch: Dispatch) => {
    debugger
    usersApi.updateStatus(status)
        .then((res) => {
            dispatch(setUserStatus(status))
        })
}
