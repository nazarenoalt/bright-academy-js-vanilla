const signupForm = document.querySelector('#signup-form');
const signup_URL = 'http://brightacademy.pythonanywhere.com/api/users/signup/';

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(signupForm);
    fetch(signup_URL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
            return response.json()
            } else {
                throw "error en la llamada del Ajax"
            }
        })
        .then(data => {
            document.cookie = `access_token=${data.access_token}`;
            console.log(data)
        })
        .catch(err => console.error(err))
})
