const signupForm = document.querySelector('#signup-form');
const signup_URL = 'http://gonza56d.pythonanywhere.com/api/users/signup/';
let xmlHttp = new XMLHttpRequest();

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(signupForm);
    fetch(signup_URL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
            return response.text()
            } else {
                throw "error en la llamada del Ajax"
            }
        })
        .then(data => console.log(data))
        .catch(err => console.error(err))
})

/* signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(signupForm);
    xmlHttp.open("POST", signup_URL, true); 
    xmlHttp.send(formData);
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            alert(xmlHttp.responseText);
        }
    }
}) */