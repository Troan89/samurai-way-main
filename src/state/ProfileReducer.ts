import {ActionType, ProfilePageType} from "./State";
import {UserProfile_T} from "../Components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {ProfileApi} from "../api/profile-api";

let ADD_POST = 'ADD-POST' as const
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const
let SET_USER_PROFILE = 'SET_USER_PROFILE' as const

const initialState: ProfilePageType = {
    postsData: [
        {id: "1", message: 'Hi, people', like: 14},
        {id: "2", message: 'Bye, people', like: 1},
        {id: "3", message: 'Yo', like: 0},
    ],
    newPostText: '',
    profile: null
}

export const ProfileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [{id: "4", message: state.newPostText, like: 0}, ...state.postsData]}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText}
        case SET_USER_PROFILE:
            return {...state, profile: action.userProfile}
    }
    return state
}

//action
export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPostText = (postText: string) => ({type: UPDATE_NEW_POST_TEXT, postText} as const)
export const setUserProfile = (userProfile: UserProfile_T) => ({type: SET_USER_PROFILE, userProfile} as const)

//thunk
export const setUserInfo = (userId:string) => (dispatch: Dispatch) => {
    ProfileApi.getUserInfo(userId)
        .then((res) => {
            dispatch(setUserProfile(res.data))
        })
}