const loginForm = document.querySelector('#login-form');
const login_URL = 'http://brightacademy.pythonanywhere.com/api/users/login/';

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
            document.cookie = `auth=true`;
            document.cookie = `access_token=${data.access_token}`;
            document.cookie = `username=${data.username}`;
            document.cookie = `first_name=${data.first_name}`;
            window.location = `../../../index.html`
        })
        .catch(err => console.error(err));
})