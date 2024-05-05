import React from 'react';
import {useAppSelector} from "../../state/redux-store";
import {Grid} from "@mui/material";
import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <LoginForm/>
            </Grid>
        </Grid>
    );
};


export default Login