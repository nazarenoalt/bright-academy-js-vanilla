import { API_URL } from "../../utils/constants.js"
import { checkUserData, checkLength } from "./checking.js"

const signupForm = document.querySelector('#signup-form');
const signup_URL = `${API_URL}users/signup/`;

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Check if user and password has enough chars, case true execute signup fetching by signupUser
    checkLength(id_username, id_password, signupUser);

    function signupUser() {
        let rejected = false;
        const formData = new FormData(signupForm)

        fetch(signup_URL, { method: 'POST', body: formData })
        .then(response => {
            if(response.status === 400) {
                rejected = true;
                return response.json()
            } else {
                return response.json()
            }
        })
        .then(data => {
            if (rejected === true) {
                checkUserData(data);
            } else {
                console.log(data)
                document.cookie = `access_token=${data.access_token}`;
                document.cookie = `auth=true`;
                document.cookie = `username=${data.user.username}`;
                document.cookie = `first_name=${data.user.profile.first_name}`;
                document.cookie = `profile_type=${data.user.profile.profile_type}`;
                window.location = `../../../index.html`
            }
        })
        .catch(err => console.error(err))
    }
})