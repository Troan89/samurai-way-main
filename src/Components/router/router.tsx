import {createBrowserRouter} from "react-router-dom";
import {Error404} from "../Error/Error404";
import React from "react";
import App from "../../App";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {Login} from "../Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        // errorElement: <div>Error 404</div>,
        children: [
            {
                path: "/profile/:id/*",
                element: (
                    <ProfileContainer />
                ),
            },
            {
                path: "/dialogs",
                element: (
                    <DialogsContainer />
                ),
            },
            {
                path: "/users",
                element: <UsersContainer />
            },
            {
                path: "/login",
                element: <Login />
            },
        ],
    },
]);