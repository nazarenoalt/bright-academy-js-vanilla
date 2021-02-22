const loginForm = document.querySelector('#login-form');
const loginButton = document.querySelector('#login-button')
const login_URL = 'http://gonza56d.pythonanywhere.com/api/users/login/';
let xmlHttp = new XMLHttpRequest();

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('hola');

    formData = new FormData(loginForm);
    
    xmlHttp.open("POST", login_URL, true); 
    xmlHttp.setRequestHeader("Access-Control-Allow-Headers", "Accept");
    xmlHttp.send(formData);
    xmlHttp.onreadystatechange = function() {
            if(xmlHttp.readyState == 4) {
                alert(xmlHttp.responseText);
            }
        }
})
