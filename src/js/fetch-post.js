import { API_URL, getGET } from "./constants.js";

const postFormulary = document.querySelector('#post_container');
const post_id = getGET().id;
const AUTH_TOKEN = '2587b85d61320f51e6eecd6b4ee0e88b6bf390a0'
const API_POST_URL = `${API_URL}posts/:id/`

//post data
fetch(API_POST_URL.replace(':id', post_id), {
    headers: {
        'Authorization': `Token ${AUTH_TOKEN}`,
        'Content-Type': 'application/json',
    }
})
.then(response => response.json())
.then(data => {
    post_title.innerHTML = data.title;
    post_content.innerHTML = data.content;
    let date = new Date(data.created);
    post_date.innerHTML = date;
})
.catch(err => console.error(err));
