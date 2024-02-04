import {ActionType, UsersDataType, UsersType} from "./State";
import {Dispatch} from "redux";
import {AuthApi, RequestLogin_T} from "../api/auth-api";
import {ProfileApi} from "../api/profile-api";
import {setUserProfile} from "./ProfileReducer";
import {AppThunk, AppThunkDispatch} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'

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
export const getUserInfo = () => (dispatch: Dispatch) => {
    AuthApi.getMeInfo()
        .then((res) => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, login, email, true))
                // dispatch(setIsLoggedInAC(true))
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
export const login = (data:RequestLogin_T): AppThunk => async (dispatch) => {
    const res = await AuthApi.login(data)
    dispatch(getUserInfo())
}
export const LogOut = () => async (dispatch: Dispatch) => {
    const res = await AuthApi.logOut()
    dispatch(setAuthUserData(null, null, null, false))
}
