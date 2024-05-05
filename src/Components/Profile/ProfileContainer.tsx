import React from "react"
import { Profile } from "./Profile"
import { connect } from "react-redux"
import { AppRootStateType } from "state/redux-store"
import {getUserStatus, savePhoto, setUserInfo, updateUserStatus} from "state/ProfileReducer"
import { WithRouterHOC } from "hoc/withRouter"
import { WithAuthRedirect } from "hoc/WithAuthRedirect"
import { Navigate } from "react-router-dom"

export type ProfilePropsType = {
    profile: UserProfile_T | null
    id?: string
    setUserInfo: (userId: string) => void
    getUserStatus: (userId: string) => void
    status: string
    updateUserStatus: (status: string) => void
    isAuth: boolean | null
    savePhoto: (photo: File) => void
}

export type UserProfile_T = {
    aboutMe: string;
    contacts: any;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: UserPhotos_T;
}
export type UserPhotos_T = {
    small: string | undefined;
    large: string | undefined;
}

class ProfileContainerAPI extends React.Component<ProfilePropsType> {

    refreshProfile(){
        let userId = this.props.id
        // if (userId === ':id' || userId === undefined) {
        if (!userId) {
            userId = '28717'
            // if (!userId) {
            //     this.props.history.push("/login")
            // }
        }
        if (userId) {
            this.props.setUserInfo(userId)
            this.props.getUserStatus(userId)
        }

    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.id !== prevProps.id) {
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }

        return <Profile isOwner={!this.props.id} profile={this.props.profile} status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus} savePhoto={this.props.savePhoto}/>
    }
}

// let AuthRedirectComponent = (props:ProfilePropsType) => {
//     if (!props.isAuth) return <Navigate to={'/login'}/>
//     return <ProfileContainerAPI {...props} />
// }

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth
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

const ProfileContainer = WithAuthRedirect(connect(mapStateToProps,
    {
        setUserInfo,
        getUserStatus,
        updateUserStatus,
        savePhoto
    })(WithRouterHOC(ProfileContainerAPI)))

export default ProfileContainer