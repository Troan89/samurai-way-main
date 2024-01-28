import React from "react";
import {ProfileInfo} from "./PropfileInfo/ProfileInfo";
import {MyPostContainer} from "./Myposts/MyPostsContainer";
import {UserProfile_T} from "./ProfileContainer";
import {Navigate} from "react-router-dom";

type ProfilePropsType = {
    profile: UserProfile_T | null
}

export const Profile = ({profile}:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer />
        </div>
    )
}