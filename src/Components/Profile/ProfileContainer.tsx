import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {setUserInfo} from "../../state/ProfileReducer";
import {WithRouterHOC} from "../../hoc/withRouter";
import {Navigate} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ProfilePropsType = {
    profile: UserProfile_T | null
    id?: string
    setUserInfo: (userId: string) => void
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
        this.props.id !== ':id' && this.props.id && this.props.setUserInfo(this.props.id)
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

// let AuthRedirectComponent = (props:ProfilePropsType) => {
//     if (!props.isAuth) return <Navigate to={'/login'}/>
//     return <ProfileContainerAPI {...props} />
// }

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
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
        setUserInfo
    })(WithRouterHOC(ProfileContainerAPI)))