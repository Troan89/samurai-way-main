import {UserProfile_T} from "../ProfileContainer";
import React from "react";
import {useFormik} from "formik";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {useAppDispatch} from "../../../state/redux-store";
import {saveProfile} from "../../../state/ProfileReducer";
import s from "./ProfileInfo.module.css"

type Props = {
    profile: UserProfile_T
    goToEditMode: () => void
}
export const ProfileBlockForm = ({profile, goToEditMode}: Props) => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: profile.contacts
        },
        onSubmit: values => {
            dispatch(saveProfile(values))
                .then(()=>{
                    goToEditMode()
                })
                .catch((e)=>{
                    console.log(e)

                })

        },
        validate: (values) => {
            const errors: Errors_T = {}

            return errors
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <Button type={'submit'} variant={'contained'} color={'success'}>
                Сохранить
            </Button>
        </div>
        <div>
            <b>Полное имя:</b>
            <div>
                <TextField
                    // label="Полное имя"
                    // margin="normal"
                    margin={"none"}
                    size={'small'}
                    error={formik.touched.fullName && !!formik.errors.fullName}
                    {...formik.getFieldProps('fullName')}
                />
                {formik.touched.fullName && formik.errors.fullName &&
                    <div style={{color: 'red'}}>{formik.errors.fullName}</div>}
            </div>
        </div>
        <div>
            <b>Ищу работу:</b>
            <div><FormControlLabel label={'Ищу работу'} control={<Checkbox
                checked={formik.values.lookingForAJob}
                {...formik.getFieldProps('lookingForAJob')}/>}/>
                {formik.touched.lookingForAJob && formik.errors.lookingForAJob &&
                    <div style={{color: 'red'}}>{formik.errors.lookingForAJob}</div>}
            </div>
        </div>
        <div>
            <b>Мои профессиональные навыки:</b>
            <div><TextField
                margin={"none"}
                size={'small'}
                error={formik.touched.lookingForAJobDescription && !!formik.errors.lookingForAJobDescription}
                {...formik.getFieldProps('lookingForAJobDescription')}
            />
                {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                    <div style={{color: 'red'}}>{formik.errors.lookingForAJobDescription}</div>}
            </div>
        </div>
        <div>
            <div>
                <b>Обо мне:</b>
                <div><TextField
                    placeholder={'aboutMe'}
                    margin={"none"}
                    size={'small'}
                    error={formik.touched.aboutMe && !!formik.errors.aboutMe}
                    {...formik.getFieldProps('aboutMe')}
                />
                    {formik.touched.aboutMe && formik.errors.aboutMe &&
                        <div style={{color: 'red'}}>{formik.errors.aboutMe}</div>}
                </div>
            </div>
            <div>
                <b>Контакты:</b> {Object.keys(profile.contacts).map(contact => {
                return <div key={contact} className={s.contact}>
                    <b>{contact}:</b>
                    <div><TextField
                        placeholder={contact}
                        margin={"none"}
                        size={'small'}
                        error={formik.touched.contacts && !!formik.errors.contacts}
                        {...formik.getFieldProps('contacts.' + contact)}
                    />
                        {formik.touched.contacts && formik.errors.contacts &&
                            <div style={{color: 'red'}}>{formik.errors.contacts}</div>}
                    </div>
                </div>
            })
            }
            </div>
        </div>
    </form>

}

type Errors_T = {
    fullName?: string,
    status?: string,
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    aboutMe?: string
}