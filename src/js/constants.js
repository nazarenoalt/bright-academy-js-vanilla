export const API_URL = 'http://brightacademy.pythonanywhere.com/api/';

export const ORIGIN_ROOT = `${window.location.origin}`

export const getGET = () => {
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

export const getCookies = () => {
    let cookies = document.cookie;
    if(cookies.indexOf(';')>0) {
        let getString = cookies.split('; ')
        let splitStrings = getString.map(str => str.split('='));
        let cookiesList = {}
        for(let i = 0; i < splitStrings.length; i++) {
            let tmp = splitStrings[i];
            cookiesList[tmp[0]] = tmp[1];
        }
        return cookiesList
    }
}

export const AUTH_TOKEN = getCookies().access_token
