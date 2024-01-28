import {ActionType, UsersDataType, UsersType} from "./State";
import {Dispatch} from "redux";
import {AuthApi} from "../api/auth-api";
import {ProfileApi} from "../api/profile-api";
import {setUserProfile} from "./ProfileReducer";

const SET_USER_DATA = 'SET_USER_DATA'


const initialState: AuthReducer_T = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
type AuthReducer_T = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
}

export const AuthReducer = (state = initialState, action: ActionType): AuthReducer_T => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
    }
    return state
}


export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
} as const)

export const getUserInfo = () => (dispatch: Dispatch) => {
    AuthApi.getMeInfo()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, login, email))
                return id
            }
        })
        .then((id) => {
            ProfileApi.getUserInfo(String(id))
                .then((res) => {
                    dispatch(setUserProfile(res.data))
                })
        })
}
