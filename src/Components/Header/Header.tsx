import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../state/redux-store";
import {LogOut} from "../../state/AuthReducer";

type Header_T = {
    isAuth: boolean | null
    login: string | null
    LogOut:()=> void
}

export const Header = ({isAuth, login, LogOut}: Header_T) => {
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        LogOut()
    }

    return (
        <header className={s.header}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=efd6ab8b3a67b0abc777cefaf348c9e086e53173-9265516-images-thumbs&n=13"}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <button onClick={logOutHandler}>LogOut</button> : <NavLink to={'/login'}>Login</NavLink>}
                <div>{login}</div>
            </div>

        </header>
    )
}