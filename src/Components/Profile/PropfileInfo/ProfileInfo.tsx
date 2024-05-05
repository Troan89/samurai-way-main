import React, {ChangeEvent, useState} from "react"
import s from "./ProfileInfo.module.css"
import {UserProfile_T} from "../ProfileContainer"
import {Preloader} from "../../common/Preloader/Preloader"
import {ProfileStatusWithHook} from "Components/Profile/PropfileInfo/ProfileStatusWithHook"
import userImg from "../../../assets/images/user.jpg"
import {ProfileBlock} from "./ProfileBlock";
import {ProfileBlockForm} from "./ProfileBlockForm";

type Props = {
    profile: UserProfile_T | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

export const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}: Props) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) { // потом редирект на логин
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }



    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.photos} src={profile.photos.large || userImg}/>
                {isOwner && <input type='file' onChange={mainPhotoSelected}/>}

                {editMode
                    ? <ProfileBlockForm profile={profile} goToEditMode={()=>{setEditMode(false)}}/>
                    : <ProfileBlock profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}} />
                }
                <ProfileStatusWithHook status={status} updateUserStatus={updateUserStatus}/>

            </div>
        </div>


    )
}

