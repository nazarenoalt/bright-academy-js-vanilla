import {userAuthentication} from "./auth.js";
import { ORIGIN_ROOT } from "./constants.js";

//writing layouts in the DOM
const index = () => document.body.classList.remove('loading');
//in the case the user be a guest, will be redirected to guest section
const isGuest = () => window.location = `${ORIGIN_ROOT}/guest.html`;
//in the case the user is registere and enter into forbidden sites, will be redirected to Index
const isRestricted = () => window.location = ORIGIN_ROOT;

const PATH = window.location.pathname;

const GUEST_PATH = [
    '/',
    '/index.html/',
    '/index.html',
    '/login.html/',
    '/login.html',
    '/signup.html/',
    '/signup.html',
    '/guest.html/',
    '/guest.html',
]
const RESTRICTED = [
    '/login.html/',
    '/login.html',
    '/signup.html/',
    '/signup.html',
    '/guest.html/',
    '/guest.html',
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

const sidebar = document.querySelector('sidebar-component');
const sidebarContent = () => sidebar.setAttribute('authenticated', 'true');