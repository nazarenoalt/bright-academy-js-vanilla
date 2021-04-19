export const API_URL = 'http://brightacademy.pythonanywhere.com/api/';

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