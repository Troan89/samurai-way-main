import React, {useEffect} from "react";
import s from './ProfileInfo.module.css'
import {UserProfile_T} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {useAppDispatch, useAppSelector} from "../../../state/redux-store";
import {getUserStatus} from "../../../state/ProfileReducer";

type ProfileInfo_T = {
    profile: UserProfile_T | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateUserStatus}: ProfileInfo_T) => {
    if (!profile) { // потом редирект на логин
        return <Preloader/>
    }

    let userContacts = []
    for (const contact of Object.entries(profile.contacts)) {
        userContacts.push(`${contact[0]}: ${contact[1]}`)
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                <div>
                    Полное имя: {profile.fullName}
                </div>
                <div>
                    Статус: {profile.aboutMe}
                </div>
                <div>
                    Ищу работу: {profile.lookingForAJob ? profile.lookingForAJobDescription : "Не ищу)"}
                </div>
                <div>
                    Контакты: {userContacts.map(contact => {
                    return <div>
                        {`${contact}, `}
                    </div>
                })}
                </div>
            </div>
        </div>


    )
}