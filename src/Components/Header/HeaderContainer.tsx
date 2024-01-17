import React from "react";
import {Header} from "./Header";
import {AuthApi} from "../../api/auth-api";
import {setAuthUserData} from "../../state/AuthReducer";
import {AppRootStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../state/ProfileReducer";
import {UserProfile_T} from "../Profile/ProfileContainer";
import {ProfileApi} from "../../api/profile-api";

type HeaderContainer_T = {
    isAuth: boolean | null
    login: string | null
    setAuthUserData:(id:number, login:string, email:string)=>void
    setUserProfile: (userProfile: UserProfile_T) => void
}

export class HeaderContainerAPI extends React.Component<HeaderContainer_T> {

    componentDidMount() {
        AuthApi.getMeInfo()
            .then((res) => {
                debugger
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, login, email)

                    ProfileApi.getUserInfo(String(id))
                        .then((res) => {
                            this.props.setUserProfile(res.data)
                        })

                }
            })
    }

    render() {
        // return <Header isAuth={this.props.isAuth} login={this.props.login} />
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, setUserProfile})(HeaderContainerAPI)