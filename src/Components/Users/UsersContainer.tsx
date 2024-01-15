import React from "react";
import {ActionType, UsersType} from "../../state/State";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../state/UsersReducer";
import axios from "axios";
import {Users} from "./Users";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export class UsersContainerAPI extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch:(action:ActionType)=>void) => {
    return {
        follow: (userId: string) => dispatch(followAC(userId)),
        unfollow: (userId: string) => dispatch(unfollowAC(userId)),
        setUsers: (users: Array<UsersType>) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (totalUsersCount:number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        setCurrentPage: (currentPage:number) => dispatch(setCurrentPageAC(currentPage))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)