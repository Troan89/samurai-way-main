import React from 'react';
import {TextField} from "@mui/material";
import {useFormik} from "formik";
import {addPost} from "../../../state/ProfileReducer";
import {useAppDispatch} from "../../../state/redux-store";
import s from '../Myposts/MyPosts.module.css'
import styled from "styled-components";

type Errors_T = {
    post?: string,
}
export const FormPost = () => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        onSubmit: values => {
            dispatch(addPost(values.post))
            formik.resetForm({
                values: {post: ''},
            })
        },
        validate: (values) => {
            const errors: Errors_T = {}
            if (!values.post) {
                errors.post = 'Required'
            } else if (values.post.length >100) {
                errors.post = 'Must not be more 100 symbols'
            }
            return errors
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <TextFieldDiv>
            <TextField
                margin="normal"
                fullWidth
                multiline
                error={formik.touched.post && !!formik.errors.post}
                {...formik.getFieldProps('post')}
            />
            {formik.touched.post && formik.errors.post &&
                <div style={{color: 'red'}}>{formik.errors.post}</div>}
        </TextFieldDiv>
        <div>
            <button type="submit" className={s.buttonAddPost} >Добавить пост</button>
        </div>
    </form>
};

const TextFieldDiv = styled.div`
    width: 100%;
    min-height: 100px;
    input {
        width: 100%;
    }
`
