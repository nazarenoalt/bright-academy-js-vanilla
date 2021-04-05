import { userAuthentication } from "./auth.js";

function importElements() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const sidebar = document.getElementById('sidebar');

    function chargeHTMLElements(url, parent) {
        return fetch(url)
            .then(response => response.text())
            .then(element => {
                parent.innerHTML = element;
            })
    }

    Promise.all([
        chargeHTMLElements('https://nazarenoalt.github.io/bright-academy/src/layouts/header.html', header),
        chargeHTMLElements('https://nazarenoalt.github.io/bright-academy/src/layouts/footer.html', footer),
        chargeHTMLElements('https://nazarenoalt.github.io/bright-academy/src/layouts/sidebar.html', sidebar),
        ])
        .then(() => {
            document.body.classList.remove('loading');
        })
        .catch(handleErrors => console.error(handleErrors));
}

const GUEST_PATH =  ['/bright-academy', '/bright-academy/login.html', '/bright-academy/signup.html', '/bright-academy/guest.html','/bright-academy/', '/bright-academy/login.html/', '/bright-academy/signup.html/', '/bright-academy/guest.html/', '/bright-academy/index.html/', '/bright-academy/index.html']

    const PATH = window.location.pathname;
if(PATH === GUEST_PATH[0] || PATH === GUEST_PATH[1] || PATH === GUEST_PATH[2] || PATH === GUEST_PATH[3] || PATH === GUEST_PATH[4] || PATH === GUEST_PATH[5] || PATH === GUEST_PATH[6] || PATH === GUEST_PATH[7] || PATH === GUEST_PATH[8] || PATH === GUEST_PATH[9]) {
        importElements();
    } else {
        userAuthentication(importElements)
    }

