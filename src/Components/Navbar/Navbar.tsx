import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {S} from '../styles/_navbarSstyles'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <S.NavWrapper><NavLink to={'/profile'}>Профиль</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={'/dialogs'}>Сообщения</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to="/news">Новости</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to="/music">Музыка</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to="/setting">Настройки</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to="/users">Пользователи</NavLink></S.NavWrapper>
        </nav>
    )
}