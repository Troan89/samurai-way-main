import styled from "styled-components";

const NavWrapper = styled.div`
    font-size: 20px;
    padding: 7px;
    border-radius: 5px;

    & > a {
        text-decoration: none;
        color: white;
    }

    & > a.active {
        text-decoration: none;
        color: #C0C0C0;
        font-weight: 600;
    }

    & > a:hover {
        background-color: #202020; /* Цвет ссылки */
    }

    &:hover {
        background-color: #202020; /* Цвет фона при ховере */
    }
`


export const S = {
    NavWrapper
}