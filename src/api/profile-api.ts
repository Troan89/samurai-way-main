import {instance} from "./intanse";
import {UserProfile_T} from "../Components/Profile/ProfileContainer";
import {SaveProfileServer} from "../state/ProfileReducer";

export const ProfileApi = {
    getUserInfo(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    saveProfile(profile:SaveProfileServer){
        return instance.put(`profile`, profile)
    }
}