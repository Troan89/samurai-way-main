import {ActionType, ProfilePageType} from "./State";

let ADD_POST = 'ADD-POST' as const
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' as const

const initialState: ProfilePageType = {
    postsData: [
        {id: "1", message: 'Hi, people', like: 14},
        {id: "2", message: 'Bye, people', like: 1},
        {id: "3", message: 'Yo', like: 0},
    ],
    newPostText: ''
}

export const ProfileReducer = (state = initialState, action: ActionType):ProfilePageType  => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, postsData: [{id:"4", message: state.newPostText, like: 0}, ...state.postsData]}
            // return state.postsData.push({id: "4", message: state.newPostText, like: 0})
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.postText}
            // return state.newPostText = action.postText
        }
    }
    return state
}


export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (postText:string) => ({type: UPDATE_NEW_POST_TEXT, postText} as const)