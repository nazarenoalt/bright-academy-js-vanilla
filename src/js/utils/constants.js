import {getCookies} from "./cookies.js";

export const API_URL = 'https://brightacademy.pythonanywhere.com/api/';
export const ORIGIN_ROOT = window.location.origin;
export const AUTH_TOKEN = getCookies().access_token;

