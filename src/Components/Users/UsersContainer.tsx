import React from "react";
import {UsersType} from "../../state/State";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {followUser, getUsers, setIsFetching, setIsFollowingProgress, unfollowUser} from "../../state/UsersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {setUserInfo} from "../../state/ProfileReducer";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    setIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    setIsFollowingProgress: (followingInProgress: boolean, userId: string) => void
    followingInProgress: string[]
    getUsers:(currentPage: number, pageSize: number)=>void
    unfollowUser:(userId:string) => void
    followUser:(userId:string) => void
    // setUserInfo:(userId: string) => void
}

export class UsersContainerAPI extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                unfollowUser={this.props.unfollowUser}
                followUser={this.props.followUser}
                // setUserInfo={this.props.setUserInfo}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = compose<React.ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps,
        {
            setIsFetching,
            setIsFollowingProgress,
            getUsers,
            unfollowUser,
            followUser,
            // setUserInfo
        }),

)(UsersContainerAPI)

// export const UsersContainer = connect(mapStateToProps,
//     {
//         setIsFetching,
//         setIsFollowingProgress,
//         getUsers,
//         unfollowUser,
//         followUser
//     })(UsersContainerAPI)