import React from "react"
import { ProfileInfo } from "./PropfileInfo/ProfileInfo"
import { MyPostContainer } from "./Myposts/MyPostsContainer"
import { UserProfile_T } from "./ProfileContainer"

type ProfilePropsType = {
    profile: UserProfile_T | null
    status:string
    updateUserStatus: (status:string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

export const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto}:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostContainer />
        </div>
    )
}