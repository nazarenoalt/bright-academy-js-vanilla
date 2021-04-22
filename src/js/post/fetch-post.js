import { API_URL, AUTH_TOKEN } from "../utils/constants.js";
import { getGET } from "../utils/root.js";

const post_id = getGET().id;
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
    html_tab_title.innerHTML = `${data.title} | Bright Academy`;
})
.catch(err => console.error(err));
