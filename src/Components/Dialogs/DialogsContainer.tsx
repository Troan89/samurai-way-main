import React from "react";
import {ActionType, DialogsDataType, MessagesDataType} from "../../state/State";
import {addMessage} from '../../state/DialogsReducer';
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {Dialogs} from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    addMessage: () => void
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
        messages: state.dialogsPage.messagesData,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        addMessage
    }),

)(Dialogs)

// export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, {
//     updateNewMessageText,
//     addMessage
// })(Dialogs))