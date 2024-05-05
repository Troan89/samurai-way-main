import {instance} from "./intanse";
import {SaveProfileServer} from "../state/ProfileReducer";

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}