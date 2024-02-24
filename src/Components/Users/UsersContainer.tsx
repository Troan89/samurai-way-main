import React from "react"
import { UsersType } from "state/State"
import { connect } from "react-redux"
import { AppRootStateType } from "state/redux-store"
import { followUser, getUsers, setIsFetching, setIsFollowingProgress, unfollowUser } from "state/UsersReducer"
import { Preloader } from "../common/Preloader/Preloader"
import { compose } from "redux"
import {
  getUsersPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getIsFetchingSelector,
  getFollowingInProgressSelector,
  getUsersSelector,
} from "selectors/usersSelectors"
import { Users } from "Components/Users/Users"

type UsersPropsType = {
  users: Array<UsersType>
  pageSize: number
  totalUserCount: number
  currentPage: number
  setIsFetching: (isFetching: boolean) => void
  isFetching: boolean
  setIsFollowingProgress: (followingInProgress: boolean, userId: string) => void
  followingInProgress: string[]
  getUsers: (currentPage: number, pageSize: number) => void
  unfollowUser: (userId: string) => void
  followUser: (userId: string) => void

}

export class UsersContainerAPI extends React.Component<UsersPropsType, any> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (page: number) => {
    const { pageSize} = this.props
    this.props.getUsers(page, pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          unfollowUser={this.props.unfollowUser}
          followUser={this.props.followUser}
        />
      </>
    )
  }
}

let mapStateToProps = (state: AppRootStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getUsersPageSizeSelector(state),
    totalUserCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
  }
}

const UsersContainer = compose<React.ComponentType>(
  // WithAuthRedirect,
  connect(mapStateToProps, {
    setIsFetching,
    setIsFollowingProgress,
    getUsers,
    unfollowUser,
    followUser,
  }),
)(UsersContainerAPI)

export default UsersContainer


