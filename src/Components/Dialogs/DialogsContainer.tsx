import React from "react";
import {ActionType} from "../../state/State";
import {addMessageAC, updateNewMessageTextAC} from '../../state/DialogsReducer';
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    // dialogsData: DialogItemPropsType[]
    // messagesData:MessagePropsType[]
    // dispatch:(action:ActionType)=>void
}

// export const DialogsContainer = (props: DialogsPropsType) => {
//     let dispatch = useDispatch()
//
//     let dialogs = useSelector<AppRootStateType, DialogsDataType[]>(state => state.dialogsPage.dialogsData)
//     let messages = useSelector<AppRootStateType, MessagesDataType[]>(state => state.dialogsPage.messagesData)
//
//     const addMessage = () => {
//         dispatch(addMessageAC())
//     }
//
//     const onMessageTextChange = (text: string) => {
//         dispatch(updateNewMessageTextAC(text))
//     }
//
//     return (
//         <Dialogs
//             onMessageTextChange={(text: string) => onMessageTextChange(text)}
//             addMessage={addMessage}
//             dialogs={dialogs}
//             messages={messages}
//         />
//     )
// }

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData
    }
}
let mapDispatchToProps = (dispatch:(action:ActionType)=>void) => {
    // let dispatch = useDispatch()
    return {
        onMessageTextChange: (text: string) => dispatch(updateNewMessageTextAC(text)),
        addMessage: () => dispatch(addMessageAC())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)