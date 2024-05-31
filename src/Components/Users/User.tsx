import styles from "./Users.module.scss"
import userImg from "../../assets/images/user.jpg"
import React from "react"
import {UsersType} from "../../state/State"
import {NavLink} from "react-router-dom"

type User_T = {
  user: UsersType
  followingInProgress: string[]
  unfollowUser: (userId: string) => void
  followUser: (userId: string) => void
}

export const User = (props: User_T) => {
  const { user, unfollowUser, followUser, followingInProgress } = props

  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img alt={''}
              src={user.photos.small != null ? user.photos.small : userImg}
              className={styles.usersPhoto}
              // onClick={()=>props.setUserInfo(user.id)}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              onClick={() => {
                unfollowUser(user.id)
              }}
              disabled={followingInProgress.some((id) => id === user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                followUser(user.id)
              }}
              disabled={followingInProgress.some((id) => id === user.id)}
            >
              Follow
            </button>
          )}
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
    </div>
  )
}
