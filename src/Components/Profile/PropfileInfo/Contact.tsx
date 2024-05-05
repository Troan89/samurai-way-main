import s from "./ProfileInfo.module.css";
import React from "react";

type Props = {
    contactTitle: string
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: Props) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}