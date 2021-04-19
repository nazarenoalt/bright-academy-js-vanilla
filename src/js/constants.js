export const API_URL = 'http://brightacademy.pythonanywhere.com/api/';
const AUTH_COOKIE = document.cookie //return the specific array that contains the token
    .split(';')
    .map(cok => cok.split('='))
    .filter(cookie => cookie[0] === "access_token");

//separate the array and return only the token
export const AUTH_TOKEN = () => AUTH_COOKIE.length !== 0 ? AUTH_COOKIE[0][1] : '';

export const ORIGIN_ROOT = `${window.location.origin}`

export function getGET() {
    let loc = document.location.href;
    let getString = loc.split('?')[1];
    let GET = getString.split('&')
    let get = {}

    for(let i = 0; i < GET.length; i++){
        let tmp = GET[i].split('=');
        get[tmp[0]] = decodeURI(tmp[1])
    }
    return get;
}