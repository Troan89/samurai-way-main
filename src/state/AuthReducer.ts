import {ActionType, UsersDataType, UsersType} from "./State";
import {Dispatch} from "redux";
import {AuthApi, RequestLogin_T} from "../api/auth-api";
import {ProfileApi} from "../api/profile-api";
import {setUserProfile} from "./ProfileReducer";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState: AuthReducer_T = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false
}
type AuthReducer_T = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
    isLoggedIn: boolean | null
}

export const AuthReducer = (state = initialState, action: ActionType): AuthReducer_T => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
    }
    return state
}

//action
export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
} as const)
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

//thunk
export const getUserInfo = () => (dispatch: Dispatch) => {
    AuthApi.getMeInfo()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, login, email))
                dispatch(setIsLoggedInAC(true))
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
export const setLogin = (data:RequestLogin_T) => async (dispatch: Dispatch) => {
    const res =  AuthApi.login(data)
}
