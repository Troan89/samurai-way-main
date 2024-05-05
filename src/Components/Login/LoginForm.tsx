import React from 'react';
import {useAppDispatch, useAppSelector} from "../../state/redux-store";
import {useFormik} from "formik";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@mui/material";
import {login} from "../../state/AuthReducer";
import {Navigate} from "react-router-dom";

const Login = () => {

    const captchaUrl = useAppSelector(state=>state.auth.captchaUrl)

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: null
        },
        onSubmit: values => {
            dispatch(login(values))
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

    return (<form onSubmit={formik.handleSubmit}>
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

                            {captchaUrl && <img src={captchaUrl}/>}
                            {captchaUrl && <TextField
                                                      margin="normal"
                                                      error={formik.touched.captcha && !!formik.errors.captcha}
                                                      {...formik.getFieldProps('captcha')}
                            />}

                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>

    );
};

//action
type Errors_T = {
    email?: string,
    password?: string
    rememberMe?: boolean
    captcha?: string | null
}
export type LoginDate_T = {
    email: string
    password: string
    rememberMe: boolean
}

export default Login