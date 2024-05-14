import styled from "styled-components";

const NavWrapper = styled.div`
  margin: 0 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: black;
      font-weight: 600;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`


export const S = {
    NavWrapper
}