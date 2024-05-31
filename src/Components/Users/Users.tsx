import React from "react"
import {UsersType} from "../../state/State"
import {Paginator} from "../common/paginator/Paginator"
import {User} from "./User"
import s from './Users.module.scss'

type Users_T = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    followingInProgress: string[]
    unfollowUser: (userId: string) => void
    followUser: (userId: string) => void
}

export const Users = (props: Users_T) => {
    const {pageSize, totalUserCount, currentPage, onPageChanged, unfollowUser, followUser, users, followingInProgress} =
        props

    return (
        <div>
            <Paginator
                pageSize={pageSize}
                totalItemsCount={totalUserCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                portionSize={10}
            />
            <div className={s.users}>
                {users.map((user) => (
                    <User
                        user={user}
                        followingInProgress={followingInProgress}
                        unfollowUser={unfollowUser}
                        followUser={followUser}
                        key={user.id}
                    />
                ))}
            </div>
        </div>
    )
}
