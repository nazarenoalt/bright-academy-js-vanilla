import {userAuthentication} from "./auth.js";
import { ORIGIN_ROOT } from "./constants.js";

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
    '/registered.html',
    '/registered.html/',
  ]
  //Restricted for registered users
  const RESTRICTED = [
      '/login.html/',
      '/login.html',
      '/signup.html/',
      '/signup.html',
      '/guest.html/',
      '/guest.html',
      '/users-list.html',
  ]
  

const detectingRoutes = () => {
  const PAGES = [];
  GUEST_PATH.map(route => PAGES.push(route));
  RESTRICTED.map(route => PAGES.push(route));
  return PAGES;
}

const routes = () => {

  //writing layouts in the DOM
  const remove_loading = () => document.body.classList.remove('loading');
  //in the case the user be a guest, will be redirected to guest section
  const redirect_guest = () => window.location = `${ORIGIN_ROOT}/guest.html`;
  //in the case the user is registere and enter into forbidden sites, will be redirected to Index
  const redirect_user = () => window.location = ORIGIN_ROOT;

  const PATH = window.location.pathname;
  //Available paths for guests
  
  const PAGES = detectingRoutes();

  if(!PAGES.includes(PATH)) window.location = `${ORIGIN_ROOT}/error404.html`;
  if (GUEST_PATH.includes(PATH)) {
      if (RESTRICTED.includes(PATH))
      {
          userAuthentication(redirect_user, remove_loading)
      } else {
          remove_loading();
      }
  } else {
      userAuthentication(remove_loading, redirect_guest)
  }

}

export default routes;