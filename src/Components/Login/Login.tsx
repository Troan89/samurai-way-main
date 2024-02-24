import React from 'react';
import {useAppDispatch, useAppSelector} from "../../state/redux-store";
import {useFormik} from "formik";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@mui/material";
import {login} from "../../state/AuthReducer";
import {Navigate} from "react-router-dom";

const Login = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm({
                values: {email: '', password: '', rememberMe: false},
            })
        },
        validate: (values) => {
            const errors: Errors_T = {}
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Must be more four symbols'
            }
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        }
    })
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField label="Email"
                                       margin="normal"
                                       error={formik.touched.email && !!formik.errors.email}
                                       {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: 'red'}}>{formik.errors.email}</div>}
                            <TextField type="password"
                                       label="Password"
                                       margin="normal"
                                       error={formik.touched.password && !!formik.errors.password}
                                       {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password &&
                                <div style={{color: 'red'}}>{formik.errors.password}</div>}
                            <FormControlLabel label={'Remember me'} control={<Checkbox
                                checked={formik.values.rememberMe}
                                {...formik.getFieldProps('rememberMe')}/>}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>

            </Grid>
        </Grid>
    );
};

//action
type Errors_T = {
    email?: string,
    password?: string
    rememberMe?: boolean
}
export type LoginDate_T = {
    email: string
    password: string
    rememberMe: boolean
}

export default Login