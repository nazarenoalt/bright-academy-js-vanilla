let counter = 500;
const comments_list = document.querySelectorAll('.comment');
const num_comments = comments_list.length;

number_comments.innerHTML = num_comments;

comment_input.addEventListener('input', charLimit);

function charLimit () {
    const commentLength = comment_input.value.length;
    char_counter.innerHTML = counter - commentLength;
    
    if(parseInt(char_counter.textContent) < 0) {
        char_counter.classList.add('limit-exceeded')
        new_comment_submit.setAttribute('disabled', true);
    } else if (char_counter.classList.contains('limit-exceeded')) {
        char_counter.classList.remove('limit-exceeded')
        new_comment_submit.removeAttribute('disabled');
    }
}

