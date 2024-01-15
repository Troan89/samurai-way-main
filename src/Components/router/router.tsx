import {createBrowserRouter} from "react-router-dom";
import {Error404} from "../Error/Error404";
import {Profile} from "../Profile/Profile";
import React from "react";
import App from "../../App";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        // errorElement: <div>Error 404</div>,
        children: [
            {
                path: "/profile",
                element: (
                    <Profile />
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
            }
        ],
    },
]);