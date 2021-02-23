const loginForm = document.querySelector('#login-form');
const login_URL = 'http://gonza56d.pythonanywhere.com/api/users/login/';
let xmlHttp = new XMLHttpRequest();

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formData = new FormData(loginForm);
    xmlHttp.open("POST", login_URL, true); 
    xmlHttp.send(formData);
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            alert(xmlHttp.responseText);
        }
    }
})

//Revisar funcion require