import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {setUserProfile} from "../../state/ProfileReducer";
import {ProfileApi} from "../../api/profile-api";
import {WithRouterHOC} from "../../hoc/withRouter";

export type ProfilePropsType = {
    setUserProfile: (userProfile: UserProfile_T) => void
    profile: UserProfile_T | null
    id?: string
}

export type UserProfile_T = {
    aboutMe: string;
    contacts: UserContacts_T;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: UserPhotos_T;
}
export type UserContacts_T = {
    facebook: string;
    vk: string;
    twitter: string;
    instagram: string;
    github: string;
}
export type UserPhotos_T = {
    small: string;
    large: string;
}

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {

    componentDidMount() {
        // console.log(this.props.params)
        this.props.id && ProfileApi.getUserInfo(this.props.id)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export const ProfileContainer = connect(mapStateToProps,
    {
        setUserProfile
    })(WithRouterHOC(ProfileContainerAPI))