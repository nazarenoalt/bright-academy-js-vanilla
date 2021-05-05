import { API_URL, AUTH_TOKEN, ORIGIN_ROOT } from "../utils/constants.js";
import { getGET } from "../utils/root.js";

export let author;
export const fetch_post = (title_input, content_input, date_input, tab_title_input, difficulty, emoji) => {
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
        document.cookie = `postAuthor=${data.user.username}`;
        document.cookie = `postId=${data.id}`
        if(title_input.type === 'text') {
            title_input.value = data.title;
        } else {
            title_input.innerHTML = data.title;
        }
        content_input.innerHTML = data.content;
        if (date_input) {
            let date = new Date(data.created);
            date_input.innerHTML = date;
        }
        if (tab_title_input) tab_title_input.innerHTML = `${data.title} | Bright Academy`;
        if(difficulty) {
            difficulty.value = data.difficulty;
            emoji.src=`assets/icons/emojis/svg/${data.emoji_id}`
        }
    })
    .catch(err => console.error(err));
}