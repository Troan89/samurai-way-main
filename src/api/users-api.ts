import {UsersType} from "../state/State";
import {instance} from "./intanse";

export const usersApi = {
    fetchUsers(currentPage: number, pageSize: number) {
        return instance.get<FetchUsers_T>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(userId: string) {
        return instance.post<ResponseUsers_T>(`follow/${userId}`, {},)
    },
    unfollowUser(userId: string) {
        return instance.delete<ResponseUsers_T>(`follow/${userId}`,)
    },
    getStatus(userId:string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status:string) {
        return instance.put<ResponseUsers_T>('profile/status', {status})
    },
    savePhoto(photoFile:File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData)
    }
}

type ResponseUsers_T = {
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








