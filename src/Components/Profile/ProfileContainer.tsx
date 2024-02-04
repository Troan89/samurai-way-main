import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {getUserStatus, setUserInfo, updateUserStatus} from "../../state/ProfileReducer";
import {WithRouterHOC} from "../../hoc/withRouter";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {Navigate, NavLink} from "react-router-dom";

export type ProfilePropsType = {
    profile: UserProfile_T | null
    id?: string
    setUserInfo: (userId: string) => void
    getUserStatus: (userId: string) => void
    status: string
    updateUserStatus: (status: string) => void
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
        let userId = this.props.id
        if (userId === ':id' || userId === undefined) {
            userId = "28717"
        }
        this.props.setUserInfo(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}

// let AuthRedirectComponent = (props:ProfilePropsType) => {
//     if (!props.isAuth) return <Navigate to={'/login'}/>
//     return <ProfileContainerAPI {...props} />
// }

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

// export const ProfileContainer = compose<React.ComponentType>(
//     connect(mapStateToProps,
//         {
//             setUserInfo
//         }),
//     WithRouterHOC,
//     WithAuthRedirect
// )(ProfileContainerAPI)

export const ProfileContainer = WithAuthRedirect(connect(mapStateToProps,
    {
        setUserInfo,
        getUserStatus,
        updateUserStatus
    })(WithRouterHOC(ProfileContainerAPI)))