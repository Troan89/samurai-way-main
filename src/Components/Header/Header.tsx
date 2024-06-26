import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type Header_T = {
    isAuth: boolean | null
    login: string | null
    LogOut:()=> void
}

export const Header = ({isAuth, login, LogOut}: Header_T) => {
    const logOutHandler = () => {
        LogOut()
    }

    return (
        <header className={s.header}>
            <img alt={''}
                src={"https://avatars.mds.yandex.net/i?id=efd6ab8b3a67b0abc777cefaf348c9e086e53173-9265516-images-thumbs&n=13"}/>
            <div className={s.loginBlock}>
                <div>{login}</div>
                {isAuth
                    ? <button onClick={logOutHandler}>LogOut</button> : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}