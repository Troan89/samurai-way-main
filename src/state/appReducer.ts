import {ActionType, UsersDataType, UsersType} from "./State";
import {Dispatch} from "redux";
import {AuthApi, RequestLogin_T} from "../api/auth-api";
import {ProfileApi} from "../api/profile-api";
import {setUserProfile} from "./ProfileReducer";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {getUserInfo} from "./AuthReducer";


const SET_INITIALIZER = 'SET_INITIALIZER'

const initialState: AuthReducer_T = {
    initialized: false,
}
type AuthReducer_T = {
    initialized: boolean,
}

export const appReducer = (state = initialState, action: ActionType): AuthReducer_T => {
    switch (action.type) {
        case "SET_INITIALIZER":
            return {...state, initialized: true}
    }
    return state
}

//action
export const setInitialized = () => ({type: SET_INITIALIZER} as const)

//thunk
export const initializeApp = (): AppThunk => async (dispatch) => {
    const res = await dispatch(getUserInfo())
    try {
        dispatch(setInitialized())
    } catch (e) {

    }

}

