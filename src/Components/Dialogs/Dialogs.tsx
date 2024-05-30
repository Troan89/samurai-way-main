import s from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {DialogsDataType, MessagesDataType} from "../../state/State";
import {addMessage} from "../../state/DialogsReducer";
import {useAppDispatch} from "../../state/redux-store";
import {useFormik} from "formik";
import {TextField} from "@mui/material";
import {FormMessage} from "./FormMessage";


type DialogsPropsType = {
    onMessageTextChange: (text: string) => void
    addMessage: () => void
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name}
                                                                           id={dialog.id}/>)
    let messagesElements = props.messages.map((message, index) => <Message key={index} message={message.message}
                                                                           id={message.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>{messagesElements}</div>
            <div className={s.FormMessage}>
                <FormMessage/>
            </div>
        </div>
    )
}

