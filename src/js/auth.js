import { API_URL, AUTH_TOKEN, getCookies } from "./constants.js";
export function userAuthentication(caseTrue, caseFalse) {

    const AUTH_API_URL = `${API_URL}utils/validate_token/`;
    fetch(AUTH_API_URL, { //fetch api and return if AUTH_TOKEN = token Api
        method: 'POST',
        headers: {
            Authorization: `Token ${AUTH_TOKEN}`
        }
    })
        .then(response => {
            if (response.ok) {
                caseTrue();
            } else {
               caseFalse();
            }
        })
}

export const authenticationByCookies = (caseTrue, caseFalse) => {
    if (getCookies().auth === 'true') {
        if(caseTrue) {
            return caseTrue();
        } else if(!caseTrue){
            return true;
        }
    } else {
        if(caseFalse) {
            return caseFalse()
        } else if (!casefalse) {
            return false;
        }
    }
}