const loginForm = document.querySelector('#login-form');
const loginButton = document.querySelector('#login-button')
const login_URL = 'http://gonza56d.pythonanywhere.com/api/users/login/';

loginButton.addEventListener('submit', (event) => {
    
    event.preventDefault();
    formData = new FormData(loginForm);
    console.log(formData);
    fetch(login_URL, {
        method: 'POST',
        body: formData
    })

})
