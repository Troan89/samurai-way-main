import React from "react";
import {ProfileInfo} from "./PropfileInfo/ProfileInfo";
import {MyPostContainer} from "./Myposts/MyPostsContainer";

type ProfilePropsType = {
    // postsData:PostsDataType[]
    // dispatch:(action:ActionType)=>void
    // newPostText:string
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    )
}