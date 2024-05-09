import {UserProfile_T} from "../ProfileContainer";
import React from "react";
import {Contact} from "./Contact";
import s from './ProfileBlock.module.css'

type Props = {
    profile: UserProfile_T
    isOwner: boolean
    goToEditMode: ()=> void
}
export const ProfileBlock = ({profile, isOwner, goToEditMode}: Props) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode} className={s.editButton}>Редактировать информацию о себе *</button>
        </div>
        }
        <div>
            <b>Полное имя:</b> {profile.fullName}
        </div>
        <div>
            <b>Ищу работу:</b> {profile.lookingForAJob ? 'ищу' : "Не ищу)"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Мои профессиональные навыки:</b> {profile.lookingForAJobDescription}
            </div>}
        <div>
            <div>
                <b>Обо мне</b>: {profile.aboutMe}
            </div>
            <b>Контакты:</b> {Object.keys(profile.contacts).map(contact => {
            return <Contact key={contact} contactTitle={contact} contactValue={profile.contacts[contact]}/>
        })
        }
        </div>
    </div>

}