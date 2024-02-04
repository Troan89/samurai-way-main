import {instance} from "./intanse";

export const AuthApi = {
    getMeInfo() {
        return instance.get<Response_T<dataMeInfo_T>>(`auth/me`)
    },
    login(data:RequestLogin_T){
        return instance.post<RequestLogin_T>(`auth/login`, data)
    },
    logOut() {
        return instance.delete<Response_T<{}>>(`auth/login`)
    }
}

type Response_T<T> = {
    resultCode: number
    messages: [],
    data: T
}
type dataMeInfo_T = {
        id: number,
        email: string,
        login: string
}
export type RequestLogin_T = {
    email:string
    password:string
    rememberMe:boolean
    captcha?: string
}





