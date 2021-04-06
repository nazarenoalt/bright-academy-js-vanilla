export function userAuthentication(fun) {

    const API_URL = 'http://brightacademy.pythonanywhere.com/api/utils/validate_token/';
    const AUTH_COOKIE = document.cookie //return the specific array that contains the token
        .split(';')
        .map(cok => cok.split('='))
        .filter(cookie => cookie[0] === "access_token");

    //separate the array and return only the token
    const AUTH_TOKEN = () => AUTH_COOKIE.length !== 0 ? AUTH_COOKIE[0][1] : '';

    fetch(API_URL, { //fetch api and return if AUTH_TOKEN = token Api
        method: 'POST',
        headers: {
            Authorization: `Token ${AUTH_TOKEN()}`
        }
    })
        .then(response => {
            if (response.ok) {
                fun();
            } else {
                window.location = 'http://localhost:63342/bright-academy/guest.html'
            }
        })

}