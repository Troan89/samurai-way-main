import styles from "./Users.module.css";
import userImg from "../../assets/images/user.jpg";
import React from "react";
import {UsersType} from "../../state/State";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/users-api";
import {useDispatch} from "react-redux";
import {setIsFollowingProgress} from "../../state/UsersReducer";
import {setUserInfo} from "../../state/ProfileReducer";

type Users_T = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    followingInProgress: string[]
    unfollowUser: (userId: string) => void
    followUser: (userId: string) => void
    // setUserInfo:(userId: string) => void
}

export const Users = (props: Users_T) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(page => <span
                className={props.currentPage === page ? styles.selectedPage : ''}
                onClick={() => props.onPageChanged(page)}> {page} </span>)}
        </div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                      <img src={user.photos.small != null ? user.photos.small : userImg}
                           className={styles.usersPhoto}
                      // onClick={()=>props.setUserInfo(user.id)}
                      />
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollowUser(user.id)
                        }} disabled={props.followingInProgress.some(id => id === user.id)}>Unfollow</button>
                        : <button onClick={() => {
                            props.followUser(user.id)
                        }} disabled={props.followingInProgress.some(id => id === user.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>
}