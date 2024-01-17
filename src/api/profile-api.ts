import axios from "axios";

export const ProfileApi = {
    getUserInfo(userId: string) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}