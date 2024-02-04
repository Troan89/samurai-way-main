import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./appReducer";

let rootReducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: appReducer
})

// export let store = legacy_createStore(rootReducers)
export let store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store