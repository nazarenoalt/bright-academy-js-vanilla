import {userAuthentication} from "./auth.js";
import { ORIGIN_ROOT } from "./root.js";

//writing layouts in the DOM
const index = () => document.body.classList.remove('loading');
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
        userAuthentication(isRestricted, index)
    } else {
        index();
    }
} else {
    userAuthentication(index, isGuest)
}
