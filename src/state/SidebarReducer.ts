import {ActionType, SidebarType} from "./State";

const initialState: SidebarType = {}

export const SidebarReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {

        default:
            return state
    }

}
