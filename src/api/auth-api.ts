import {instance} from "./intanse";

export const AuthApi = {
    getMeInfo() {
        return instance.get<getMeInfo_T>(`auth/me`)
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





