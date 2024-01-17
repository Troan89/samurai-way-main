import axios from "axios";

export const AuthApi = {
    getMeInfo() {
        return axios.get<getMeInfo_T>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    }
}

type getMeInfo_T = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}





