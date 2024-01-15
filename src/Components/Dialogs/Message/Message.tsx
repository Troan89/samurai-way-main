import s from "../Dialogs.module.css";

export type MessagePropsType = {
    message: string
    id: string
}
export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}