export function userAuthentication(fun) {
    let cookies = document.cookie.split(';');
    let authCookie = cookies.map(cookie => cookie.split('=')).filter(cookie => cookie[0] === "access_token");

    let AUTH_TOKEN;
    if (authCookie.length !== 0) {
        const AUTH_TOKEN = authCookie[0][1];
    } else {
        console.log('hola')
    }
    const API_URL = 'http://brightacademy.pythonanywhere.com/api/utils/validate_token/';

    fetch(API_URL, {
        method: 'POST',
        headers: {
            Authorization: `Token ${AUTH_TOKEN}`
        }
    })
        .then(response => {
            if (response.ok) {
                return 'todo okay!'
                fun();
            } else {
                window.location = 'http://localhost:63342/bright-academy/guest.html'
            }
        })
}