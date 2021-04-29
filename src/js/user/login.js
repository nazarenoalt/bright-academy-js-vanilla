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
            document.cookie = `auth=true; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            document.cookie = `access_token=${data.access_token}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            document.cookie = `username=${data.user.username}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            document.cookie = `first_name=${data.user.profile.first_name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            document.cookie = `profile_type=${data.user.profile.profile_type}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            window.location = `../../../index.html`
        })
        .catch(err => console.error(err));
})