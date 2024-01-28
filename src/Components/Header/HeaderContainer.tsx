import React from "react";
import {Header} from "./Header";
import {getUserInfo} from "../../state/AuthReducer";
import {AppRootStateType} from "../../state/redux-store";
import {connect} from "react-redux";

type HeaderContainer_T = {
    isAuth: boolean | null
    login: string | null
    getUserInfo:()=> void
}

export class HeaderContainerAPI extends React.Component<HeaderContainer_T> {

    componentDidMount() {
        this.props.getUserInfo()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    getUserInfo
})(HeaderContainerAPI)