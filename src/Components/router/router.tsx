import {createBrowserRouter, Navigate} from "react-router-dom";
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
            {
                path: "/404",
                element: <Error404/>
            },
            {
                path: "/*",
                element: <Navigate to={'/404'}/>
            },
        ],
    },
]);