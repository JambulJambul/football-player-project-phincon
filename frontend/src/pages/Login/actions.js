import { SET_LOGIN } from "./constants";

export const setLogin = (postData, cbSuccess, cbFailed) => ({
    type: SET_LOGIN,
    postData,
    cbSuccess,
    cbFailed
})