import React from "react";
import {Header} from "./Header";
import {getUserInfo, LogOut} from "../../state/AuthReducer";
import {AppRootStateType} from "../../state/redux-store";
import {connect} from "react-redux";

type HeaderContainer_T = {
    isAuth: boolean | null
    login: string | null
    LogOut:()=> void
}

export class HeaderContainerAPI extends React.Component<HeaderContainer_T> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} LogOut={this.props.LogOut} />
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    LogOut
})(HeaderContainerAPI)