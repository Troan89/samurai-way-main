import React from "react";
import {ProfileInfo} from "./PropfileInfo/ProfileInfo";
import {MyPostContainer} from "./Myposts/MyPostsContainer";
import {UserProfile_T} from "./ProfileContainer";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../state/redux-store";

type ProfilePropsType = {
    profile: UserProfile_T | null
    status:string
    updateUserStatus: (status:string) => void
}

export const Profile = ({profile, status, updateUserStatus}:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostContainer />
        </div>
    )
}