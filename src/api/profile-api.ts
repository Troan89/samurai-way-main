import {instance} from "./intanse";

export const ProfileApi = {
    getUserInfo(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}