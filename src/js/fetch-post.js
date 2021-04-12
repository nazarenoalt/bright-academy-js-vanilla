
const postFormulary = document.querySelector('#post_container');
const URL = 'http://gonza56d.pythonanywhere.com/api/posts/:id/';
const post_id = '1';
const AUTH_TOKEN = '2587b85d61320f51e6eecd6b4ee0e88b6bf390a0'

//post data
    fetch(URL.replace(':id', post_id), {
        headers: {
            'Authorization': `Token ${AUTH_TOKEN}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:63342',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            post_title.innerHTML = data.title;
            post_content.innerHTML = data.content;
            let date = new Date(data.created);
            post_date.innerHTML = date;
        })
        .catch(err => console.error(err));