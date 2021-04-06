import {userAuthentication} from "./auth.js";
import { ORIGIN_ROOT } from "./root.js";

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
        chargeHTMLElements(`${ORIGIN_ROOT}/src/layouts/header.html`, header),
        chargeHTMLElements(`${ORIGIN_ROOT}/src/layouts/footer.html`, footer),
        chargeHTMLElements(`${ORIGIN_ROOT}/src/layouts/sidebar.html`, sidebar),
    ])
        .then(() => {
            document.body.classList.remove('loading');
        })
        .catch(handleErrors => console.error(handleErrors));
}

const GUEST_PATH = [
    '/bright-academy',
    '/bright-academy/login.html',
    '/bright-academy/signup.html',
    '/bright-academy/guest.html',
    '/bright-academy/',
    '/bright-academy/login.html/',
    '/bright-academy/signup.html/',
    '/bright-academy/guest.html/',
    '/bright-academy/index.html/',
    '/bright-academy/index.html'
]

const PATH = window.location.pathname;
if (GUEST_PATH.includes(PATH)) {
    importElements();
} else {
    userAuthentication(importElements)
}

/*
* PROBLEMA: Pese a que la cookie da token de acceso, la página sigue tratandome como si fuese invitado
*
* RAIZ DEL PROBLEMA: La razon podría ubicarse en auth.js
* */
