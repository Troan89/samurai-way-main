import {ActionType} from "./State";
import {Dispatch} from "redux";
import {AuthApi, RequestLogin_T} from "../api/auth-api";
import {AppThunk} from "./redux-store";


const SET_USER_DATA = 'AUTH/SET_USER_DATA'

const initialState: AuthReducer_T = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
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
            return {...state, ...action.data}
        }
    }
    return state
}

//action
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, login, email, isAuth}
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
    try {
        await dispatch(getUserInfo())
    } catch (e) {
        console.log(e)
        // const error = e.
    }

}
export const LogOut = () => async (dispatch: Dispatch) => {
    const res = await AuthApi.logOut()
    dispatch(setAuthUserData(null, null, null, false))
}
