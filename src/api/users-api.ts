import {UsersType} from "../state/State";
import {instance} from "./intanse";

export const usersApi = {
    fetchUsers(currentPage: number, pageSize: number) {
        return instance.get<FetchUsers_T>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(userId: string) {
        return instance.post<FollowUnfollowUsers_T>(`follow/${userId}`, {},)
    },
    unfollowUser(userId: string) {
        return instance.delete<FollowUnfollowUsers_T>(`follow/${userId}`,)
    },
}

type FollowUnfollowUsers_T = {
    resultCode: number
    fieldsErrors: []
    messages: string,
    data: {}
}
type FetchUsers_T = {
    items: UsersType[]
    totalCount: number
    error: null
}








