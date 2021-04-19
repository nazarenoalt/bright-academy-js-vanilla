import { API_URL, AUTH_TOKEN } from "./constants.js";

export function userAuthentication(caseTrue, caseFalse) {

    const AUTH_API_URL = `${API_URL}utils/validate_token/`;
    fetch(AUTH_API_URL, { //fetch api and return if AUTH_TOKEN = token Api
        method: 'POST',
        headers: {
            Authorization: `Token ${AUTH_TOKEN()}`
        }
    })
        .then(response => {
            if (response.ok) {
                caseTrue();
                document.cookie = 'auth:ok'
            } else {
               caseFalse();
               document.cookie = 'auth:off'
            }
        })
}