import {ActionType, DialogsPageType, ProfilePageType} from "./State";

let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT' as const
let ADD_MESSAGE = 'ADD-MESSAGE' as const

const initialState: DialogsPageType = {
    messagesData: [
        {id: "1", userId: "1", message: 'Hello'},
        {id: "2", userId: "1", message: 'You are santa?'},
        {id: "3", userId: "1", message: 'Yo'},
        {id: "4", userId: "2", message: 'Again'},
        {id: "5", userId: "2", message: 'You are vodka?'},
        {id: "6", userId: "2", message: 'Yo'},
        {id: "7", userId: "3", message: 'Bye'},
        {id: "8", userId: "3", message: 'You are piter?'},
        {id: "9", userId: "3", message: 'Yo'},
        {id: "10", userId: "4", message: 'Crista'},
        {id: "11", userId: "4", message: 'You are Bober?'},
        {id: "12", userId: "4", message: 'Yo'},
        {id: "13", userId: "5", message: 'Hay'},
        {id: "14", userId: "5", message: 'You are lev?'},
        {id: "15", userId: "5", message: 'Yo'},
    ],
    dialogsData: [
        {id: "1", name: 'Ivan'},
        {id: "2", name: 'Igor'},
        {id: "3", name: 'Viktor'},
        {id: "4", name: 'Alina'},
        {id: "5", name: 'Daniil'},
    ],
}

export const DialogsReducer = (state = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messagesData: [...state.messagesData, {id: "16", userId: "6", message: action.messageText}]}
    }
    return state
}


//action
export const addMessage = (messageText:string) => ({type: ADD_MESSAGE, messageText} as const)


//types
