import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React, {ChangeEvent, useState} from "react";
import {DialogsDataType, MessagesDataType} from "../../state/State";
import {Navigate} from "react-router-dom";
import {updateNewMessageText} from "../../state/DialogsReducer";
import {useAppDispatch} from "../../state/redux-store";


type DialogsPropsType = {
    onMessageTextChange: (text: string) => void
    addMessage: () => void
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {
    const [messageText, setMessageText] = useState<string>('')

    let dialogsElements = props.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name}
                                                                           id={dialog.id}/>)
    let messagesElements = props.messages.map((message, index) => <Message key={index} message={message.message}
                                                                           id={message.id}/>)
const dispatch = useAppDispatch()

    const addMessage = () => {
        props.addMessage()
        setMessageText('')
    }

    const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
        dispatch(updateNewMessageText(messageText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        onChange={onMessageTextChange}
                        value={messageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Добавить сообщение</button>
                </div>
            </div>

        </div>
    )
}