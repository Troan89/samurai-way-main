import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";

let rootReducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})

// export let store = legacy_createStore(rootReducers)
export let store = createStore(rootReducers)

export type AppRootStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store