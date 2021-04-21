import { API_URL, AUTH_TOKEN } from "../../utils/constants.js";
import { getCookies } from "../../utils/cookies.js";
import { getProfileType } from "./profile_type.js";

const URL = `${API_URL}/users/:username`.replace(':username', getCookies().username)
fetch(URL,{
  method: 'GET',
  headers: {
    Authorization: `Token  ${AUTH_TOKEN}`
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data.profile.bio)
    username.innerHTML = data.username;
    email.innerHTML = data.email;
    first_name.innerHTML = data.profile.first_name
    last_name.innerHTML = data.profile.last_name;
    profile_type.innerHTML = getProfileType(data.profile.profile_type);
    bio.innerHTML = data.profile.bio;
  });