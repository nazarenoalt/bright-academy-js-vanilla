import {userAuthentication} from "./auth.js";
import { ORIGIN_ROOT } from "./root.js";

//writing layouts in the DOM
const importElements = () => {
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
        //chargeHTMLElements(`${ORIGIN_ROOT}/src/layouts/header.html`, header),
        chargeHTMLElements(`${ORIGIN_ROOT}/src/layouts/footer.html`, footer),
        chargeHTMLElements(`${ORIGIN_ROOT}/src/layouts/sidebar.html`, sidebar),
    ])
        .then(() => {
            document.body.classList.remove('loading');
        })
        .catch(handleErrors => console.error(handleErrors));
}

//in the case the user be a guest, will be redirected to guest section
const isGuest = () => window.location = `${ORIGIN_ROOT}/guest.html`;
//in the case the user is registere and enter into forbidden sites, will be redirected to Index
const isRestricted = () => window.location = ORIGIN_ROOT;

const PATH = window.location.pathname;
const GUEST_PATH = [
    '/bright-academy/',
    '/bright-academy',
    '/bright-academy/index.html/',
    '/bright-academy/index.html',
    '/bright-academy/login.html/',
    '/bright-academy/login.html',
    '/bright-academy/signup.html/',
    '/bright-academy/signup.html',
    '/bright-academy/guest.html/',
    '/bright-academy/guest.html',
]
const RESTRICTED = [
    '/bright-academy/login.html/',
    '/bright-academy/login.html',
    '/bright-academy/signup.html/',
    '/bright-academy/signup.html',
    '/bright-academy/guest.html/',
    '/bright-academy/guest.html',
]
if (GUEST_PATH.includes(PATH)) {
    if (RESTRICTED.includes(PATH))
    {
        userAuthentication(isRestricted, importElements)
    } else {
        importElements();
    }
} else {
    userAuthentication(importElements, isGuest)
}
