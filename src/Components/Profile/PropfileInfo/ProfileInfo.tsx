import React, {ChangeEvent, useRef, useState} from "react"
import s from "./ProfileInfo.module.css"
import {UserProfile_T} from "../ProfileContainer"
import {Preloader} from "../../common/Preloader/Preloader"
import {ProfileStatusWithHook} from "Components/Profile/PropfileInfo/ProfileStatusWithHook"
import userImg from "../../../assets/images/user.jpg"
import editPhoto from "../../../assets/editPhoto.png"
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
    const inputRef = useRef<HTMLInputElement>(null);
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
                <div  className={s.imageContainer}>
                    <img alt={''} className={s.photos} src={profile.photos.large || userImg}/>
                    {isOwner &&
                        <div className={s.uploadButton}>
                            <button  onClick={() => inputRef.current?.click()}>
                                <img src={editPhoto} alt=""/>
                            </button>
                            <input ref={inputRef} type='file' onChange={mainPhotoSelected} style={{ display: 'none' }}/>
                        </div>
                    }
                </div>

                {editMode
                    ? <ProfileBlockForm profile={profile} goToEditMode={() => {
                        setEditMode(false)
                    }}/>
                    : <ProfileBlock profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>
                }
                <ProfileStatusWithHook status={status} updateUserStatus={updateUserStatus}/>

            </div>
        </div>


    )
}

