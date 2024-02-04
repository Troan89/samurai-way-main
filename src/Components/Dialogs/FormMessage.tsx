import React from 'react';
import {TextField} from "@mui/material";
import {useFormik} from "formik";
import {useAppDispatch} from "../../state/redux-store";
import s from "./Dialogs.module.css";
import {addMessage} from "../../state/DialogsReducer";

type Errors_T = {
    message?: string,
}
export const FormMessage = () => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: values => {
            console.log(values.message)
            dispatch(addMessage(values.message))
            formik.resetForm({
                values: {message: ''},
            })
        },
        validate: (values) => {
            const errors: Errors_T = {}
            if (!values.message) {
                errors.message = 'Required'
            } else if (values.message.length > 100) {
                errors.message = 'Must not be more 100 symbols'
            }
            return errors
        }
    })

    return <form onSubmit={formik.handleSubmit} className={s.messages}>
        <div>
            <TextField
                margin="normal"
                error={formik.touched.message && !!formik.errors.message}
                {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message &&
                <div style={{color: 'red'}}>{formik.errors.message}</div>}
        </div>
        <div>
            <button type={'submit'} >Добавить сообщение</button>
        </div>
    </form>
};

