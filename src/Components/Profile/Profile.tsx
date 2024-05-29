import React from "react"
import { ProfileInfo } from "./PropfileInfo/ProfileInfo"
import { MyPostContainer } from "./Myposts/MyPostsContainer"
import { UserProfile_T } from "./ProfileContainer"
import s from './Profile.module.scss'

type ProfilePropsType = {
    profile: UserProfile_T | null
    status:string
    updateUserStatus: (status:string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

export const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto}:ProfilePropsType) => {

    return (
        <div className={s.wrapperBlockProfile}>
            <div className={s.profileInfoContainer}>
                <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            </div>
            <MyPostContainer />
        </div>
    )
}