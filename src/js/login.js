import { ORIGIN_ROOT } from "./constants.js";

const loginForm = document.querySelector('#login-form');
const login_URL = 'http://brightacademy.pythonanywhere.com/api/users/login/';
let xmlHttp = new XMLHttpRequest();

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    fetch(login_URL, { method: 'POST', body: formData })
        .then(response => {
            if(response.ok) {
              return  response.json();
            } else {
                throw "error en la llamada Ajax";
            }
        })
        .then(data => {
            document.cookie = `access_token=${data.access_token}`;
            document.cookie = `username=${data.username}`;
            document.cookie = `first_name=${data.first_name}`;
            console.log(data)
            window.location = `${ORIGIN_ROOT}/index.html`
        })
        .catch(err => console.error(err));
})