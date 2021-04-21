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
            console.log(data);
            document.cookie = `auth=true`;
            document.cookie = `access_token=${data.access_token}`;
            document.cookie = `username=${data.user.username}`;
            document.cookie = `first_name=${data.user.profile.first_name}`;
            document.cookie = `profile_type=${data.user.profile.profile_type}`;
            window.location = `../../../index.html`
        })
        .catch(err => console.error(err));
})