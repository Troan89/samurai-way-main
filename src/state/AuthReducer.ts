import {ActionType, UsersDataType, UsersType} from "./State";

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
            debugger
            return {...state, ...action.data, isAuth: true}
        }
    }
    return state
}


export const setAuthUserData = (id:number, login:string, email:string) => ({type: SET_USER_DATA, data:{id,login,email}} as const)
