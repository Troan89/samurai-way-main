import { ActionType } from "./State"
import { AppThunk } from "./redux-store"
import { getUserInfo } from "./AuthReducer"


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

