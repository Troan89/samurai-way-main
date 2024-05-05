import {ActionType} from "./State";
import {Dispatch} from "redux";
import {AuthApi, RequestLogin_T} from "../api/auth-api";
import {AppThunk} from "./redux-store";
import {securityApi} from "../api/security-api";


const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL = 'AUTH/GET_CAPTCHA_URL'

const initialState: AuthReducer_T = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
type AuthReducer_T = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
    captchaUrl: string | null
}

export const AuthReducer = (state = initialState, action: ActionType): AuthReducer_T => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }
        case "AUTH/GET_CAPTCHA_URL":
            return {...state, captchaUrl: action.url}
    }
    return state
}

//action
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, login, email, isAuth}
} as const)
export const getCaptchaUrl = (url: string) => ({
    type: GET_CAPTCHA_URL,
    url: url
} as const)

//thunk
export const getUserInfo = () => async (dispatch: Dispatch) => {
    const res = await AuthApi.getMeInfo()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (data: RequestLogin_T): AppThunk => async (dispatch) => {
    const res = await AuthApi.login(data)
    if (res.data.resultCode === 0) {
        await dispatch(getUserInfo())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        console.log(res.data.messages)
    }

}
export const getCaptcha = (): AppThunk => async (dispatch) => {
    const res = await securityApi.getCaptchaUrl()
    const captcha = res.data.url
    dispatch(getCaptchaUrl(captcha))
}
export const LogOut = () => async (dispatch: Dispatch) => {
    const res = await AuthApi.logOut()
    dispatch(setAuthUserData(null, null, null, false))
}
