const loginForm = document.querySelector('#login-form');
const login_URL = 'http://gonza56d.pythonanywhere.com/api/users/login/';
let xmlHttp = new XMLHttpRequest();

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(loginForm);
    fetch(login_URL, { method: 'POST', body: formData })
        .then(response => {
            if(response.ok) {
              return  response.text();
            } else {
                throw "error en la llamada Ajax";
            }
        })
        .then(data => console.log(data))
        .catch(err => console.error(err));
})
