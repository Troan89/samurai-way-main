import {addPostAC, ProfileReducer, updateNewPostTextAC} from "./ProfileReducer";
import {addMessageAC, DialogsReducer, updateNewMessageTextAC} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "./UsersReducer";

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: "1", message: 'Hi, people', like: 14},
//                 {id: "2", message: 'Bye, people', like: 1},
//                 {id: "3", message: 'Yo', like: 0},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: "1", userId: "1", message: 'Hello'},
//                 {id: "2", userId: "1", message: 'You are santa?'},
//                 {id: "3", userId: "1", message: 'Yo'},
//                 {id: "4", userId: "2", message: 'Again'},
//                 {id: "5", userId: "2", message: 'You are vodka?'},
//                 {id: "6", userId: "2", message: 'Yo'},
//                 {id: "7", userId: "3", message: 'Bye'},
//                 {id: "8", userId: "3", message: 'You are piter?'},
//                 {id: "9", userId: "3", message: 'Yo'},
//                 {id: "10", userId: "4", message: 'Crista'},
//                 {id: "11", userId: "4", message: 'You are Bober?'},
//                 {id: "12", userId: "4", message: 'Yo'},
//                 {id: "13", userId: "5", message: 'Hay'},
//                 {id: "14", userId: "5", message: 'You are lev?'},
//                 {id: "15", userId: "5", message: 'Yo'},
//             ],
//             dialogsData: [
//                 {id: "1", name: 'Ivan'},
//                 {id: "2", name: 'Igor'},
//                 {id: "3", name: 'Viktor'},
//                 {id: "4", name: 'Alina'},
//                 {id: "5", name: 'Daniil'},
//             ],
//             newPostText: ''
//         },
//         sidebar: {}
//     },
//     getState() {
//         return this._state
//     },
//     rerenderEntireTree() {
//         console.log("sdfsdfg")
//     },
//     subscribe(observer: () => void) {
//         this.rerenderEntireTree = observer
//     },
//     dispatch(action: ActionType) {
//         ProfileReducer(this._state.profilePage, action)
//         DialogsReducer(this._state.dialogsPage, action)
//         SidebarReducer(this._state.sidebar, action)
//     }
// }

export type StoreType = {
    _state: DataStateType
    getState: () => DataStateType
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
export type DataStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type SidebarType = {}
export type DialogsPageType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
    newPostText: string
}
export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostText: string
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    userId: string
    message: string
}
export type UsersDataType = {
    users: Array<UsersType>
    pageSize:number
    totalUsersCount: number
    currentPage: number
}
export type UsersType = {
    id: string
    photos: {
        small: string
        large:string
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}
export type PostsType = {
    id: string
    message: string
    like: number
}

export type ActionType = AddPostType | UpdateNewPostTextType |
    AddMessageType | UpdateNewMessageTextType |
    FollowType | UnfollowType | setUsersType | setCurrentPageType | setTotalUsersCountType

export type AddPostType = ReturnType<typeof addPostAC>
export type AddMessageType = ReturnType<typeof addMessageAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextAC>
export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>




