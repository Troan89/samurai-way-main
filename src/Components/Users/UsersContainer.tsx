import React from "react";
import {UsersType} from "../../state/State";
import {connect} from "react-redux";
import {AppRootStateType} from "../../state/redux-store";
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow} from "../../state/UsersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
    setIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

export class UsersContainerAPI extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setIsFetching(false)
            })
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
                unfollow={this.props.unfollow}
                follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, setIsFetching
    })(UsersContainerAPI)