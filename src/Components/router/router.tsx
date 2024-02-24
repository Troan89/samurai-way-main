import {createBrowserRouter, Navigate} from "react-router-dom";
import React, {lazy} from "react";
import App from "../../App";

const DialogsContainer = lazy(() => import("../Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("../Profile/ProfileContainer"))
const UsersContainer = lazy(() => import("../Users/UsersContainer"))
const Login = lazy(() => import("../Login/Login"))
const Error404 = lazy(() => import("../Error/Error404"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/profile/:id?",
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